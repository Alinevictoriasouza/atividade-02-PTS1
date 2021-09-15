const express = require('express');
const app = express();
const porta = 3000;

app.use(express.static('public')); 
app.set ('view  engine', 'ejs');
app.engine ('html', require ('ejs').renderFile ) ;

app.get('/', (req, res) => {
  res.send("index.ejs");
})

app.get('/noticias', (req, res) => {
  res.send("noticias/index.ejs");
})

app.get('/apresentarnoticias1', (req, res) => {
  res.send("noticias/listarnoticias/index.ejs");
})

app.get('/apresentarnoticias2', (req, res) => {
  res.render("noticias/listarnoticias/index2.ejs");
})

app.get('/apresentarnoticias3', (req, res) => {
  res.render("noticias/listarnoticias/index3.ejs");
})

app.get('/apresentarnoticias4', (req, res) => {
  res.render("noticias/listarnoticias/index4.ejs");
})

app.listen(porta, () => {
  console.log('O servidor estao funcionando xuxu beleza');
})