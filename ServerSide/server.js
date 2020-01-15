const express = require('express');
const app = express();

const Port = 1000;
const data = {
    name: 'Vishnu vardhan balasundaram',
    Projectname: 'FindMyCourt'
}

app.get('/', (req, res, next) => {
    res.send(data);
});

app.listen(Port);