show databases;

create database proyectodb;

use proyectodb;

create table tarea (
	id int auto_increment primary key,
    nombre varchar(50),
    descripcion varchar(200),
    estado int
);

describe tarea;

DELIMITER //

create procedure crearTarea(vnombre varchar(50),vdescripcion varchar(200))
begin
	insert into tarea (nombre,descripcion,estado) values
    (vnombre,vdescripcion,0);
end //

DELIMITER ;

DELIMITER //

create procedure obtenerTarea(vid int)
begin
	select id,nombre, descripcion,estado from tarea where id = vid;
end //

DELIMITER ;

DELIMITER //

create procedure obtenerTareas()
begin
	select id,nombre, descripcion,estado from tarea;
end //

DELIMITER ;

DELIMITER //

create procedure actualizarTarea(vid int, vnombre varchar(50),
vdescripcion varchar(200), vestado int)
begin
	update tarea set nombre = vnombre, descripcion = vdescripcion,
    estado = vestado where id = vid;
end //

DELIMITER ;

DELIMITER //

create procedure borrarTarea(vid int)
begin
	delete from tarea where id=vid;
end //

DELIMITER ;