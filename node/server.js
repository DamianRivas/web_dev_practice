const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// MIDDLEWARE
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// app.use(express.static(`${__dirname}/public`))

app.get('/', (req, res) => {
  // console.log(req.query);
  // req.body
  // console.log(req.header("name"));
  res.status(200).send("Getting root...");
})
app.get('/profile/:id', (req, res) => {
  res.send("Getting profile...");
  console.log(req.params);
})
app.post('/profile', (req, res) => {
  const user = req.body;
  console.log(user);

  res.send('Success');
})
app.listen(3000);
