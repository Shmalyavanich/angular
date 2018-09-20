const express = require('express');
const bodyParser = require('body-parser');
let users = require('./users.json');

const app = express();
const port = 3000;


const getUser = (id: string) => {
    return users.find((fields:any) => fields.id === id);
};

const getUserIndex = (id: any) => {
    return users.findIndex((fields:any) => fields.id === id);
};

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/users', (req: object, res: any) => {
    res.json(users);
});

app.get('/users/:id', (req: any, res: any) => {
    res.json(getUser(req.params.id));
});

app.post('/users/add', (req: any, res: any) => {
    users.push(req.body);
    res.send();
});

app.put('/users/:id', (req: any, res: any) => {
    const userIndex = getUserIndex(req.params.id);
    for (let field in req.body) {
        users[userIndex][field] = req.body[field];
    }
    res.send();
});

app.delete('/users/:id', (req: any, res: any) => {
    users = users.filter((fields:any) => fields.id !== req.params.id);
    res.send();
});


app.listen(port,() => {
    console.log(`server is listening on ${port}`);
});