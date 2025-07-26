const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let posts = [];

app.use(bodyParser.urlencoded({ extended: true }));

// Display posts and a form
app.get('/', (req, res) => {
  let postList = posts.map(p => `<h2>${p.title}</h2><p>${p.content}</p>`).join('<hr>');
  res.send(`${postList}<form method="post" action="/add">
    <input name="title" placeholder="Title"/><br/>
    <textarea name="content" placeholder="Content"></textarea><br/>
    <button type="submit">Add Post</button>
  </form>`);
});

// Add post
app.post('/add', (req, res) => {
  posts.push({ title: req.body.title, content: req.body.content });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Blog app running on http://localhost:3000');
});
