const express = require('express');
const os = require('os');

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const hostname = os.hostname();
  res.send(`Hola, mundo! El nombre de tu máquina es: ${hostname}`);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Servidor corriendo en http://0.0.0.0:${port}`);
});