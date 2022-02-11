require('dotenv').config();

const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;

// Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(
  __dirname + '/views/partials',
  function (err) {},
);

// Servir contenido estático
app.use(express.static('public'));

// Home
app.get('/', (req, res) => {
  res.render('home', {
    nombre: 'Silviu Manea Hamzau',
    titulo: 'Curso de node',
  });
});

// Generic
app.get('/generic', (req, res) => {
  res.render('generic', {
    nombre: 'Silviu Manea Hamzau',
    titulo: 'Curso de node',
  });
});

// Elements
app.get('/elements', (req, res) => {
  res.render('elements', {
    nombre: 'Silviu Manea Hamzau',
    titulo: 'Curso de node',
  });
});

// app.get('/hola-mundo', (req, res) => {
//   res.send('Hola mundo en su respectiva ruta');
// });

// app.get('/generic', (req, res) => {
//   res.sendFile(__dirname + '/public/generic.html');
// });

// app.get('/elements', (req, res) => {
//   res.sendFile(__dirname + '/public/elements.html');
// });

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/404.html');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
  //console.log(process);
});
