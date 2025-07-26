const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let books = [
  { title: "The Hobbit", author: "J.R.R. Tolkien", price: 15 },
  { title: "1984", author: "George Orwell", price: 12 }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let bookList = books.map(b => `<li>${b.title} by ${b.author} - $${b.price}</li>`).join('');
  res.send(`<h1>Book Store</h1><ul>${bookList}</ul>
    <form method="post" action="/add">
      <input name="title" placeholder="Title"/>
      <input name="author" placeholder="Author"/>
      <input name="price" placeholder="Price" type="number"/>
      <button type="submit">Add Book</button>
    </form>`);
});

app.post('/add', (req, res) => {
  books.push({ title: req.body.title, author: req.body.author, price: req.body.price });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Book store running on http://localhost:3000');
});
