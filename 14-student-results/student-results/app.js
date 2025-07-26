const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let students = [];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let studentList = students.map(s => 
    `<li>${s.name} - Grade: ${s.grade}</li>`).join('');
  res.send(`<h1>Student Results</h1><ul>${studentList}</ul>
    <form method="post" action="/add">
      <input name="name" placeholder="Student Name" required/>
      <input name="grade" placeholder="Grade" required/>
      <button type="submit">Add Result</button>
    </form>`);
});

app.post('/add', (req, res) => {
  students.push({ name: req.body.name, grade: req.body.grade });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Student result app running on http://localhost:3000');
});
