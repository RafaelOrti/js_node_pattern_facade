// Este archivo actúa como el controlador para las solicitudes que llegan a la fachada.

class FacadeController {
  constructor(facade) {
    this.facade = facade;
  }

  async submodulo1Action(req, res) {
    try {
      const data = await this.facade.submodulo1Method();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error en el submódulo 1' });
    }
  }

  async submodulo2Action(req, res) {
    try {
      const data = await this.facade.submodulo2Method();
      res.status(200).json(data);
    } catch (error) {
      res.status(500).json({ error: 'Ocurrió un error en el submódulo 2' });
    }
  }

  // Otros métodos para las acciones de otros submódulos
}

module.exports = FacadeController;
