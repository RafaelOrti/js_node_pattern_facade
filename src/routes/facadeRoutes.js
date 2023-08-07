// Este archivo define las rutas para las acciones de la fachada.

const express = require('express');
const FacadeController = require('../controllers/facadeController');
const Facade = require('../facades/facade');

const router = express.Router();
const facade = new Facade();
const facadeController = new FacadeController(facade);

router.get('/submodulo1', facadeController.submodulo1Action.bind(facadeController));
router.get('/submodulo2', facadeController.submodulo2Action.bind(facadeController));

// Otras rutas para las acciones de otros submódulos

module.exports = router;
