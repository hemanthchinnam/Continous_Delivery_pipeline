const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello Welcome to the project
all the stages of project are done!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
