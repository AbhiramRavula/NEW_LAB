CREATE DATABASE inventory_db;
USE inventory_db;
CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255),
  quantity INT,
  price DECIMAL(10,2)
);
