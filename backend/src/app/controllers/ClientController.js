const ClientsRepository = require("../repositories/ClientsRepository");

class ClientController {

  async index(request, response) {
    // Listar todos os registros
    try {
      const clients = await ClientsRepository.findAll();

      response.json(clients);
    } catch (err) {
      console.error(err);

      response.status(500).json({
        error: 'Server error'
      });
    }
  }

  async show(request, response) {
    // Obter UM registro
    try {
      const {
        id
      } = request.params;

      const client = await ClientsRepository.findById(id);

      if (!client) {
        return response.status(404).json({
          error: 'Client Not Found'
        });
      }

      response.json(client);
    } catch (err) {
      console.error(err);

      response.status(500).json({
        error: ' Server errror'
      });
    }
  }

  async store(request, response) {
    // criar um novo registro
    try {
      const {
        name,
        phone,
        adreess,
        residence_number,
        residence_type,
        complement,
        equipment,
        repair_date,
        next_repair,
        value,
        occurrence,
        service,
        neighborhood,
        observation
      } = request.body;

      const clientExists = await ClientsRepository.findByName(name);

      if (!name) {
        return response.status(400).json({
          error: 'Nome é obrigatório'
        });
      }

      if (clientExists) {
        return response.status(400).json({
          error: 'Cliente já cadastrado com esse nome'
        });
      }

      const client = await ClientsRepository.create({
        name,
        phone,
        adreess,
        residence_number,
        residence_type,
        complement,
        equipment,
        repair_date,
        next_repair,
        value,
        occurrence,
        service,
        neighborhood,
        observation
      });

      response.json(client)
    } catch (err) {
      console.error(err);

      response.status(500).json({
        error: 'Server error'
      });
    }
  }

  async update(request, response) {
    // Editar um registro
    try {
      const {
        id
      } = request.params;

      const {
        name,
        phone,
        adreess,
        residence_number,
        residence_type,
        complement,
        equipment,
        repair_date,
        next_repair,
        value,
        occurrence,
        service,
        neighborhood,
        observation
      } = request.body;

      const clientExists = await ClientsRepository.findById(id);
      if (!clientExists) {
        return response.status(400).json({
          error: 'Client Not Found'
        });
      }

      if (!name) {
        return response.status(400).json({
          error: 'Nome é obrigatório'
        });
      }

      const clientByPhone = await ClientsRepository.findByPhone(phone);
      if (clientByPhone && clientByPhone.id != id) {
        return response.status(400).json({
          error: 'Este telefone já está em uso'
        })
      }

      const client = await ClientsRepository.update(id, {
        name,
        phone,
        adreess,
        residence_number,
        residence_type,
        complement,
        equipment,
        repair_date,
        next_repair,
        value,
        occurrence,
        service,
        neighborhood,
        observation
      });

      response.json(client);
    } catch (err) {
      console.error(err);

      response.status(500).json({
        error: 'Server error'
      });
    }
  }

  async delete(request, response) {
    // Deletar um registro
    try {
      const {
        id
      } = request.params;

      const client = await ClientsRepository.findById(id);

      if (!client) {
        return response.status(404).json({
          error: 'Client Not Found'
        });
      }

      await ClientsRepository.delete(id);

      // 204: No Content
      response.sendStatus(204);
    } catch (err) {
      console.error(err);

      response.status(500).json({
        error: 'Serve error'
      });
    }
  }

}

// Singleton -> só pode ter uma instancia dos objetos dentro da aplicacao
module.exports = new ClientController();
