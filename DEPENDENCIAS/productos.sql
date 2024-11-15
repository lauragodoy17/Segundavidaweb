-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:33065
-- Tiempo de generación: 15-11-2024 a las 06:33:24
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `garaje`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `Id` int(10) NOT NULL,
  `img` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `price` int(10) NOT NULL,
  `inventory` int(10) NOT NULL,
  `name` varchar(100) NOT NULL,
  `faction` int(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`Id`, `img`, `description`, `price`, `inventory`, `name`, `faction`) VALUES
(2, 'celular1.jpeg', 'bueno', 1800000, 20, 'Celular', 1),
(3, 'computador.jpg', 'buena calidad', 450, 20, 'computador', 1),
(6, 'producto_electronica_1.jpg', 'Smartphone con cámara', 300, 50, 'Smartphone', 1),
(7, 'laptop.jpg', 'Laptop para juegos', 1300, 30, 'Laptop Gamer', 1),
(8, 'producto_electronica_3.jpg', 'Auriculares inalámbricos', 90, 100, 'Auriculares Bluetooth', 1),
(9, 'producto_electronica_4.jpg', 'Televisor 4K de 55 pulgadas', 600, 20, 'Televisor 4K', 1),
(10, 'producto_electronica_5.jpg', 'Reloj inteligente', 200, 75, 'Reloj Inteligente', 1),
(11, 'producto_electronica_6.jpg', 'Altavoz Bluetooth', 50, 150, 'Altavoz Inalámbrico', 1),
(12, 'producto_muebles_1.jpeg', 'Sofá moderno de 3 plazas', 500, 10, 'Sofá Moderno', 2),
(13, 'producto_muebles_2.jpeg', 'Mesa de comedor de madera', 300, 15, 'Mesa de Comedor', 2),
(14, 'producto_muebles_3.jpg', 'Silla ergonómica', 150, 25, 'Silla Ergonómica', 2),
(15, 'producto_muebles_4.jpg', 'Lámpara de pie', 80, 40, 'Lámpara de Pie', 2),
(16, 'producto_muebles_5.jpeg', 'Estantería de pared', 200, 20, 'Estantería', 2),
(17, 'producto_muebles_6.jpg', 'Cojín decorativo', 30, 100, 'Cojín Decorativo', 2),
(18, 'producto_ropa_1.jpg', 'Camiseta de algodón', 20, 200, 'Camiseta', 3),
(19, 'producto_ropa_2.jpg', 'Jeans ajustados', 40, 150, 'Jeans Ajustados', 3),
(20, 'producto_ropa_3.jpg', 'Chaqueta de cuero', 90, 75, 'Chaqueta de Cuero', 3),
(21, 'producto_ropa_4.jpg', 'Zapatos deportivos', 60, 100, 'Zapatillas Deportivas', 3),
(22, 'producto_ropa_5.jpg', 'Gorra de béisbol', 15, 200, 'Gorra', 3),
(23, 'producto_ropa_6.jpg', 'Bufanda de lana', 25, 120, 'Bufanda', 3),
(24, 'producto_electrodomestico_1.jpg', 'Refrigerador de 2 puertas', 800, 15, 'Refrigerador', 4),
(25, 'producto_electrodomestico_2.jpg', 'Lavadora automática', 500, 20, 'Lavadora', 4),
(26, 'producto_electrodomestico_3.jpg', 'Microondas de 20 litros', 90, 50, 'Microondas', 4),
(27, 'producto_electrodomestico_4.jpg', 'Batidora de mano', 30, 100, 'Batidora', 4),
(28, 'producto_electrodomestico_5.jpg', 'Cafetera de goteo', 40, 80, 'Cafetera', 4),
(29, 'producto_electrodomestico_6.jpg', 'Aspiradora vertical', 130, 30, 'Aspiradora', 4),
(30, 'producto_juguetes_1.jpg', 'Muñeca de colección', 30, 100, 'Muñeca', 5),
(31, 'producto_juguetes_2.jpg', 'Juego de mesa familiar', 50, 70, 'Juego de Mesa', 5),
(32, 'producto_juguetes_3.jpg', 'Pelota de fútbol', 20, 150, 'Pelota de Fútbol', 5),
(33, 'producto_juguetes_4.jpg', 'Bloques de construcción', 40, 80, 'Bloques de Construcción', 5),
(34, 'producto_juguetes_5.jpg', 'Rompecabezas de 1000 piezas', 25, 60, 'Rompecabezas', 5),
(35, 'producto_juguetes_6.jpg', 'Tren eléctrico', 90, 40, 'Tren Eléctrico', 5),
(36, 'producto_libros_1.jpg', 'Novela de misterio', 15, 200, 'Novela de Misterio', 6),
(37, 'producto_libros_2.jpg', 'Guía de viajes', 20, 150, 'Guía de Viajes', 6),
(38, 'producto_libros_3.jpg', 'Libro de cocina', 25, 100, 'Libro de Cocina', 6),
(39, 'producto_libros_4.jpg', 'Biografía inspiradora', 30, 80, 'Biografía', 6),
(40, 'producto_libros_5.jpg', 'Revista de moda', 10, 300, 'Revista de Moda', 6),
(41, 'producto_libros_6.jpg', 'Manual de autoayuda', 17, 120, 'Manual de Autoayuda', 6),
(42, 'producto_hogar_1.jpg', 'Juego de herramientas', 40, 50, 'Juego de Herramientas', 7),
(43, 'producto_hogar_2.jpg', 'Maceta de cerámica', 20, 100, 'Maceta', 7),
(44, 'producto_hogar_3.jpg', 'Parrilla portátil', 100, 30, 'Parrilla Portátil', 7),
(45, 'producto_hogar_4.jpg', 'Manta de picnic', 30, 60, 'Manta de Picnic', 7),
(46, 'producto_hogar_5.jpg', 'Luz solar decorativa', 25, 80, 'Luz Solar', 7),
(47, 'producto_hogar_6.jpg', 'Bolsas de reciclaje', 15, 150, 'Bolsas de Reciclaje', 7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`Id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `Id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=48;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
