const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
let users = require('./users.json');


const app = express();
const port = 3000;
const delayTime = 3000;

let isAuthorized = false;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req: any, res: any, next:any) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
  next()
});

app.get('/', (req: any, res: any) => {
  setTimeout(
    () => res.json({'loaded': true}),
    delayTime);
});

app.get('/users', (req: any, res: any) => {
  res.json(users);
});

app.get('/users/:id', (req: any, res: any) => {
  setTimeout(
    () => res.json(getUser(req.params.id)),
    delayTime);
});

app.post('/users/add', (req: any, res: any) => {
  users.push(req.body);
  res.send();
});

app.put('/users/:id', (req: any, res: any) => {
  const userIndex = getUserIndex(req.params.id);

  for (let field in req.body) {
    if(req.body[field] != '') {
      users[userIndex][field] = req.body[field];
    }
  }

  setTimeout(
    () => res.send(users[userIndex]),
    delayTime);
});

app.put('/update-pass', (req: any, res: any) => {
  const userIndex = getUserIndexByName(req.body.name)

  setTimeout( () => {

    if(userIndex > -1){
      users[userIndex]['password'] = req.body.password;

      res.send({found: true, password: req.body.password});

    } else {

      res.send({found: false, password: req.body.password});

    }

  }, delayTime);

});

app.delete('/users/:id', (req: any, res: any) => {
  users = users.filter((fields:any) => fields.id !== req.params.id);
  res.send();
});

app.get('/auth', (req: any, res: any) => {
  const name = req.query.name;
  const password = req.query.password;

  let user = userAuth(name, password);

  if(!!user){
    isAuthorized = true;
  } else {
    user = {};
    isAuthorized = false;
  }

  user['authorized'] = isAuthorized;

  //res.cookie('authorized', `${isAutorized}`);
  setTimeout(
    () => res.json(user),
    delayTime);
});


app.listen(port,() => {
  console.log(`server is listening on ${port}`);
});

const getUser = (id: string) => {
  return users.find((fields:any) => fields.id === id);
};

const getUserIndex = (id: string) => {
  return users.findIndex((fields:any) => fields.id === id);
};

const userAuth = (name: string, password: string) => {
  return users.find((fields:any) => (fields.name === name) && (fields.password === password));
};

const getUserIndexByName = (name: string) => {
  return users.findIndex((fields:any) => fields.name === name);
};
