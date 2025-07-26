const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Use your MySQL username
  password: '',       // Use your MySQL password
  database: 'inventory_db'
});

connection.connect(err => {
  if (err) throw err;
  console.log('Connected to MySQL database');
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM products', (err, results) => {
    if (err) throw err;
    let productList = results.map(p => 
      `<li>${p.name} - Qty: ${p.quantity} - $${p.price}</li>`).join('');
    res.send(`<h1>Product Inventory</h1><ul>${productList}</ul>
      <h2>Add Product</h2>
      <form method="post" action="/add">
        <input name="name" placeholder="Name" required/>
        <input name="quantity" placeholder="Quantity" type="number" required/>
        <input name="price" placeholder="Price" type="number" step="0.01" required/>
        <button type="submit">Add Product</button>
      </form>`);
  });
});

app.post('/add', (req, res) => {
  const { name, quantity, price } = req.body;
  const sql = 'INSERT INTO products (name, quantity, price) VALUES (?, ?, ?)';
  connection.query(sql, [name, quantity, price], (err) => {
    if (err) throw err;
    res.redirect('/');
  });
});

app.listen(3000, () => {
  console.log('Inventory system running on http://localhost:3000');
});
