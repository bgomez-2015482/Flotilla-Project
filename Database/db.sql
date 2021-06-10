DROP DATABASE IF EXISTS DBFlotilla_Vehiculos;
CREATE DATABASE DBFlotilla_Vehiculos;
USE DBFlotilla_Vehiculos;

CREATE TABLE Vehicles (
	codeVehicle int not null auto_increment,
    brand varchar(20) not null,
    status varchar(20) not null,
    model varchar(10) not null,
    year_ int not null,
	license varchar(30) not null,
    image varchar(1000) not null,
    created_at timestamp default current_timestamp,
    primary key PK_codeVehicle (codeVehicle)
);

DESCRIBE Vehicles;

SELECT * FROM Vehicles;

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '';