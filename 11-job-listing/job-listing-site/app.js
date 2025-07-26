const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let jobs = [
  { title: "Frontend Developer", company: "Tech Corp", location: "New York" },
  { title: "Backend Developer", company: "Innovate Ltd", location: "Boston" }
];

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  let jobList = jobs.map(job =>
    `<li><strong>${job.title}</strong> at ${job.company} (${job.location})</li>`
  ).join('');
  res.send(`<h1>Job Listings</h1><ul>${jobList}</ul>
    <h2>Add a Job</h2>
    <form method="post" action="/add">
      <input name="title" placeholder="Job Title" required/>
      <input name="company" placeholder="Company" required/>
      <input name="location" placeholder="Location" required/>
      <button type="submit">Add Job</button>
    </form>`);
});

app.post('/add', (req, res) => {
  jobs.push({ title: req.body.title, company: req.body.company, location: req.body.location });
  res.redirect('/');
});

app.listen(3000, () => {
  console.log('Job listing site running on http://localhost:3000');
});
