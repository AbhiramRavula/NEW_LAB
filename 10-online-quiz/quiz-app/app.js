const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const questions = [
  { q: "2 + 2?", a: "4" },
  { q: "Capital of France?", a: "Paris" }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let quiz = questions.map((item, idx) =>
    `<label>${item.q}<input name="q${idx}" /></label><br/>`).join('');
  res.send(`<form method="post" action="/submit">${quiz}<button type="submit">Submit</button></form>`);
});

app.post('/submit', (req, res) => {
  let score = questions.reduce((acc, q, idx) => acc + (req.body[`q${idx}`] == q.a ? 1 : 0), 0);
  res.send(`Score: ${score}/${questions.length}`);
});

app.listen(3000, () => {
  console.log('Quiz app running on http://localhost:3000');
});
