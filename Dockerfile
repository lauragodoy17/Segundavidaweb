# Usa una imagen base ligera de Node.js
FROM node:alpine

# Establece el directorio de trabajo
WORKDIR /app

# Copia los archivos package.json y yarn.lock
COPY package*.json ./ 
COPY yarn.lock ./

# Instala todas las dependencias
RUN yarn install

# Copia todo el código fuente
COPY . .

# Compila el frontend con Vite
RUN yarn build

# Verifica si la carpeta dist se ha creado
RUN ls -la dist

# Instala serve y concurrently para manejar múltiples procesos
RUN yarn global add serve concurrently

# Exponemos los puertos necesarios para frontend (5173) y backend (3080)
EXPOSE 5173
EXPOSE 3080

# Ejecuta frontend y backend en paralelo con concurrently
CMD ["concurrently", "\"serve -s dist -l 5173\"", "\"node server.js\""]
