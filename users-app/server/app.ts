const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
let users = require('./users.json');
/*
interface User{
  name: string;
  password: string;
  date_of_birth: string;
  date_of_first_login: string;
  date_of_next_notification: string;
  information: string;
  authorized: boolean;
}*/

const app = express();
const port = 3000;
const delayTime = 100;

let isAuthorized = false;


app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(function(req: any, res: any, next:any) {
  res.header('Access-Control-Allow-Origin', '*');
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

// app.get('/login', (req: any, res: any) => {
//   // res.send(userLogin());
// });
//
// app.get('/cookie', (req: any, res: any) => {
//   res.send(req.cookies['autorized']);
// });

/*app.post('/auth', (req: any, res: any) => {
  const name = req.body.name;
  const password = req.body.password;

  if(userAuth(name, password)){

    isAutorized = true;
    res.cookie('authorized', 'true');
    res.send({'authorized': true});

  } else {
    res.send({'authorized': false});
  }
});*/


app.get('/auth', (req: any, res: any) => {
  const name = req.query.name;
  const password = req.query.password;

  const user = userAuth(name, password);
  isAuthorized = !!user;

  user['authorized'] = isAuthorized;
  res.cookie('test', 'my-test',  { httpOnly: true, secure: false });
  //res.cookie('authorized', `${isAutorized}`);
  res.json(user);
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

// const findUserById = (id: string) => {
//   return users.findIndex((fields:any) => fields.id === id);
// };
