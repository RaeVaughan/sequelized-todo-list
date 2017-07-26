CREATE DATABASE task_bd;
USE task_bd;

CREATE TABLE tasks
(
	id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
	task_name varchar(255) NOT NULL,
	completed BOOLEAN DEFAULT false,
	date timestamp
);