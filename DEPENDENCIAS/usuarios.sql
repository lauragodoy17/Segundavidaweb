-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:33065
-- Tiempo de generación: 15-11-2024 a las 06:33:59
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
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) NOT NULL,
  `usuario` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `contraseña`) VALUES
(1, 'laura', 'laurav-godoyg@unilibre.edu.co', '$2b$10$NNmHT4JQiUBn22miNATvv.0w9ANbg9bD5f7nsbJLGmeTvjCn2Dh76'),
(2, 'plop', 'laurav-godoyg@unilibre.edu.co', '$2b$10$.7ywLry.ZS6OzwfTcdat5OxdSIQsnVuYYZmkl5iqJ8tk.upI.13eK'),
(3, 'plop', 'diegobarra@hotmail.com', '$2b$10$R.OeumKkfOruuDNUoRaEbuj2fSLwpFxPxDj6Uw2Kq44BvDW3LOYZm'),
(4, 'plop', 'admin@gmail.com', '$2b$10$o7wXZfrY1HRim18cQHX2O.usYUXC9PJxlDCAwZnh64Y8FY0WNTkES'),
(5, 'lulu', 'godoylaura332@gmail.com', '$2b$10$5B6bQfOwXCbLMA3gU97i0u.ECF/B4fKIscdIm4.2obRtDDCLyc4nm'),
(6, 'lulu', 'godoylaura332@gmail.com', '$2b$10$pekE5gBjrXZCWT0I81P3r.mzYDDlrPe7yQ7Pz1L3expcA1TyyyZbu'),
(7, 'prueba', 'hola@gmail.com', '$2b$10$f3XvYeLJp2Ry5ynarTYzlOOFjWgnn6VHp4cRHio76KF2dCEnLqM22');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
