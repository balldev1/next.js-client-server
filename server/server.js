const express = require('express');
const app = express();
const cors = require('cors');
const POST = 4000;

app.use(cors());

app.get('/api/home', (req, res) => {
    res.json({ message: 'Hello World555!', people: ['harry', 'jack', 'barry', 'test'] });
})

app.listen(POST, () => {
    console.log(`You can do it! ${POST}`)
})