// Este archivo define el modelo de datos para el submódulo 1, si es necesario.

const mongoose = require('mongoose');

const submodulo1Schema = new mongoose.Schema({
  // Definición del esquema para el submódulo 1
});

const Submodulo1Model = mongoose.model('Submodulo1', submodulo1Schema);

module.exports = Submodulo1Model;
