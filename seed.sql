-- Insertar usuarios
INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com'),
    ('Bob', 'bob@example.com');
-- Insertar productos
INSERT INTO products (name, price)
VALUES ('Laptop', 999.99),
    ('Mouse', 25.50);
-- Insertar pedidos
INSERT INTO orders (user_id, product_id, quantity)
VALUES (1, 1, 1),
    (2, 2, 2);
