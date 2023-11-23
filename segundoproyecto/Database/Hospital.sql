CREATE TABLE `Medicos` (
  `Cedula` int(50) PRIMARY KEY,
  `Nombre` varchar(100),
  `Apellido` varchar(100),
  `Especialidad` varchar(50),
  `Consultorio` char(3),
  `Correo` varchar(50),
  `Telefono` varchar(100)
);

CREATE TABLE `Pacientes` (
  `Cedula` int(50) PRIMARY KEY,
  `Nombre` varchar(100),
  `Apellido` varchar(100),
  `Fecha_Nacimiento` date,
  `telefono` varchar(50)
);

CREATE TABLE `Cita_Medica` (
  `id` int AUTO_INCREMENT,
  `Cedula_Medico` int(50),
  `Cedula_Pacientes` int(50),
  `Fecha_Cita` date,
  PRIMARY KEY (`id`, `Cedula_Medico`, `Cedula_Pacientes`)
);

ALTER TABLE `Cita_Medica` ADD FOREIGN KEY (`Cedula_Medico`) REFERENCES `Medicos` (`Cedula`);

ALTER TABLE `Cita_Medica` ADD FOREIGN KEY (`Cedula_Pacientes`) REFERENCES `Pacientes` (`Cedula`);
