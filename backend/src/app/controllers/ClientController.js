const ClientsRepository = require("../repositories/ClientsRepository");

class ClientController {

  async index(request, response) {
    // Listar todos os registros
    const clients = await ClientsRepository.findAll();

    response.json(clients);
  }

  async show(request, response) {
    // Obter UM registro
    const { id } = request.params;

    const client = await ClientsRepository.findById(id);

    if (!client) {
      return response.status(404).json({ error: 'Client Not Found' });
    }

    response.json(client);
  }

  async store(request, response) {
    // criar um novo registro
    const { name, phone , adreess, residence_number, residence_type, complement, equipment, repair_date, next_repair, value, occurrence, service, neighborhood, observation } = request.body;

    const clientExists = await ClientsRepository.findByName(name);

    if (clientExists) {
      return response.status(400).json({ error: 'Cliente já cadastrado com esse nome' });
    }

    const client = await ClientsRepository.create({
      name, phone , adreess, residence_number, residence_type, complement, equipment, repair_date, next_repair, value, occurrence, service, neighborhood, observation
    });

    response.json(client)
  }

  update() {
    // Editar um registro
  }

  async delete(request, response) {
    // Deletar um registro
    const { id } = request.params;

    const client = await ClientsRepository.findById(id);

    if(!client) {
      return response.status(404).json({ error: 'Client Not Found' });
    }

    await ClientsRepository.delete(id);

    // 204: No Content
    response.sendStatus(204);
  }

}

// Singleton -> só pode ter uma instancia dos objetos dentro da aplicacao
module.exports = new ClientController();
