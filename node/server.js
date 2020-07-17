const express = require('express');
const router = require('./src/route');
const { use } = require('./src/route');

const app = express();

app.use('/', (req, res, next) => {
    return res.status(200).json('pong')
});

app.use('', router);

app.listen(3001, () => console.log(`Express started at $(configurations.host)`));
