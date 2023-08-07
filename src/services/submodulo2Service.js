class Submodulo2Service {
  async doSomethingElse() {
    // Simulando una tarea asíncrona
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('Resultado del submódulo 2');
      }, 1500);
    });
  }
}

module.exports = Submodulo2Service;
