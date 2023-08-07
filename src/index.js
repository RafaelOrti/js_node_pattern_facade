// Punto de entrada de la aplicación donde se configuran los servidores y las rutas.

const express = require('express');
const app = express();
const facadeRoutes = require('./routes/facadeRoutes');

// Configuración de Middlewares, Express y otras configuraciones...

app.use('/api', facadeRoutes);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
