const mongoose = require('mongoose');

// Definir el esquema del modelo para el submódulo 3
const submodulo3Schema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
  },
  edad: {
    type: Number,
    required: true,
  },
  // Otros campos y propiedades según tus necesidades
});

// Crear y exportar el modelo basado en el esquema
const Submodulo3Model = mongoose.model('Submodulo3', submodulo3Schema);

module.exports = Submodulo3Model;
