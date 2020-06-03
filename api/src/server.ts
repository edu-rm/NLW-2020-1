import express from 'express';

const app = express();

app.get('/', (req, res) => {
    return res.json({ msg: 'working'});
})

app.listen(3333);