CREATE DATABASE true_communication;
USE true_communication;

CREATE TABLE relatos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipo_golpe VARCHAR(100) NOT NULL,
    tipo_contato VARCHAR(100) NOT NULL,
    data_tentativa DATE NOT NULL,
    numero VARCHAR(100),
    banco VARCHAR(100),
    descricao TEXT NOT NULL,
    data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
