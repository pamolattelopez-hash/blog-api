const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/posts', require('./routes/posts'));
app.use('/api/autores', require('./routes/autores'));

app.listen(3000, () => {
  console.log('Servidor funcionando en http://localhost:3000');
});