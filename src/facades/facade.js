// Este archivo define el Facade, que simplifica la interfaz para acceder a los servicios internos.

const Submodulo1Service = require('../services/submodulo1Service');
const Submodulo2Service = require('../services/submodulo2Service');

class Facade {
  constructor() {
    this.submodulo1Service = new Submodulo1Service();
    this.submodulo2Service = new Submodulo2Service();
  }

  async submodulo1Method() {
    return this.submodulo1Service.doSomething();
  }

  async submodulo2Method() {
    return this.submodulo2Service.doSomethingElse();
  }

  // Otros métodos para los submódulos
}

module.exports = Facade;
