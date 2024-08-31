import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

const salt = 10;
const port = 3080;
const app = express();

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'garaje',
    port: '33065'
});

app.post('/Registro', (req, res) => {
    const sql = "INSERT INTO usuarios (usuario, email, contraseña) VALUES (?)";
    bcrypt.hash(req.body.contraseña.toString(), salt, (err, hash) => {
        if (err) return res.status(500).json({ Error: "Error al realizar el hashing" });
        const values = [
            req.body.usuario,
            req.body.email,
            hash
        ];
        db.query(sql, [values], (err, result) => {
            if (err) return res.status(500).json({ Error: "Error al insertar datos" });
            return res.status(201).json({ Status: "Success" });
        });
    });
});

app.post('/Inicio', (req, res) => {
    const sql = 'SELECT * FROM usuarios WHERE email=?';
    db.query(sql, [req.body.email], (err, data) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ Error: "Error en el servidor" });
        }

        if (data.length > 0) {
            bcrypt.compare(req.body.contraseña.toString(), data[0].contraseña, (err, response) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ Error: "Error al comparar contraseñas" });
                }
                if (response) {
                    return res.status(200).json({ Status: "Success" });
                } else {
                    return res.status(401).json({ Error: "Contraseña incorrecta" });
                }
            });
            
        } else {
            return res.status(404).json({ Error: "El email no existe" });
        }
    });
});
const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if (!token) {
        return res.status(401).json({ Error: "No estás autenticado" });
    } else {
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if (err) {
                return res.status(401).json({ Error: "Token no válido" });
            } else {
                req.contraseña = decoded.contraseña;
                next();
            }
        });
    }
};

app.get('/', verifyUser, (req, res) => {
    return res.json({ Status: "Success", cedula: req.contraseña });
});

app.get('/logout', (req, res) => {
    res.clearCookie('token');
    return res.json({ Status: "Success" });
});

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});