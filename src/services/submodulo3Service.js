const Submodulo3Model = require('../models/submodulo3Model');

class Submodulo3Service {
  async createPerson(personData) {
    try {
      const newPerson = new Submodulo3Model(personData);
      const savedPerson = await newPerson.save();
      return savedPerson;
    } catch (error) {
      throw new Error('Error al crear una persona en el submódulo 3');
    }
  }

  async getAllPeople() {
    try {
      const people = await Submodulo3Model.find();
      return people;
    } catch (error) {
      throw new Error('Error al obtener la lista de personas en el submódulo 3');
    }
  }

  // Otros métodos para el submódulo 3
}

module.exports = Submodulo3Service;
