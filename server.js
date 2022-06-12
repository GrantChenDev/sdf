const express = require("express");
const app = express();
const cors = require('cors')
const config = require('./config')

// console.log(`NODE_ENV=${config.NODE_ENV}`);
// console.log(process.env.PORT);

app.use(cors())

app.get("/", (req, res) => {
  console.log('YOOOOOOOOOOOOOOOOOOOOOOO')
  console.log(process.env)
  res.write(`<h1>${config.NODE_ENV}</h1>`)
  res.write(`<h1>${process.env.SECRET}</h1>`)
  res.write("<h1>Hi2</h1>")
  res.send();
});

app.get("/ayo", (req, res) => {
  res.send(JSON.stringify({name: 'Grant'}));
});

app.listen(process.env.PORT);
