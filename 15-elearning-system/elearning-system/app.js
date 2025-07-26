const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let courses = [
  { id: 1, title: 'JavaScript Basics', description: 'Learn the basics of JS' },
  { id: 2, title: 'Node.js Introduction', description: 'Start with Node.js' }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let courseList = courses.map(c => 
    `<h3>${c.title}</h3><p>${c.description}</p>`).join('');
  res.send(`<h1>E-learning Courses</h1>${courseList}
    <h2>Add Course</h2>
    <form method="post" action="/add">
      <input name="title" placeholder="Course Title" required/>
      <textarea name="description" placeholder="Description" required></textarea>
      <button type="submit">Add Course</button>
    </form>`);
});

app.post('/add', (req, res) => {
  let newId = courses.length + 1;
  courses.push({ id: newId, title: req.body.title, description: req.body.description });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('E-learning system running on http://localhost:3000');
});
