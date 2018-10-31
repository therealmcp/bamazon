DROP DATABASE IF EXISTS bamazonDB;

CREATE DATABASE bamazonDB;

USE bamazonDB;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(100) NOT NULL,
    price DECIMAL(5, 2) NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Senior Woman with Asthma Wall Decal", "Wall Stickers & Murals", 24.96, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Motion Activated Toilet Nightlight", "Lighting & Ceiling Fans", 11.49, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Goosh Pants", "Men's Accessories", 23.95, 23);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nicolas Cage Pillowcase", "Bedding", 5.89, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yodelling Pickle", "Toys", 9.99, 72);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dancing with Jesus", "Books", 14.39, 666);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Gummi Bear Skeleton Anatomy", "Toys", 26.77, 52);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Barbarian Knit Beanie Octopus", "Women's Accesories", 5.99, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Madagascar Hissing Cockroaches Sexed Pair", "Animals", 9.59, 62);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Five Finger Hands Finger Puppets", "Toys", 6.75, 86);