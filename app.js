const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res, next) => {
    res.send("Ready to go");
});

app.listen(5000, () => {
    console.log('We are connected folks!')
});