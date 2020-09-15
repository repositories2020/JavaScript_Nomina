-- DROP DATABASE IF EXISTS Nomina;
CREATE DATABASE Nomina;
USE Nomina;

CREATE TABLE Usuario(
 id_Usuario int primary key auto_increment,
 Usuario varchar(50) UNIQUE,
 Clave varchar(50)
);

CREATE TABLE Empleado(
 id_Empleado int primary key auto_increment,
 Documento varchar(10) UNIQUE,
 Nombre varchar(30),
 Apellido varchar(30),
 Direccion varchar(70),
 Telefono varchar(15)
);

CREATE TABLE Nomina(
 id_Nomina int primary key auto_increment,
 Empleado int,
 Salario real,
 DiasTrabajados int,
 Hed int,
 Hen int,
 Hedd int,
 Hedn int,
 Hrn int,
 FechaNomina timestamp,
 FOREIGN KEY (Empleado) REFERENCES Empleado(id_Empleado)
);

INSERT INTO usuario VALUES(1,'Jorge23','jorgepelado1234');

INSERT INTO Empleado VALUES(1,'100074569','Mario Enrique','Castañeda Alvarez','Cra 5a','3274568474');
INSERT INTO Empleado VALUES(2,'101475501','Luisa','Blanca Soez','Cll 27 sur','3001452030');

INSERT INTO Nomina VALUES(1,1,1500000,30,1,2,0,1,3,Now());
INSERT INTO Nomina VALUES (2,2,3000000,20,4,4,4,4,4,Now());

select * from empleado;