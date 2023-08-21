const { v4 } = require('uuid');

let clients = [{
    id: v4(),
    name: 'Felipe Ghidini',
    phone: '9388849995',
    adreess: 'Rua Masato Sakai',
    residence_number: '180',
    residence_type: 'Apartamento',
    complement: 'Bloco 2 Apartamento 44',
    equipment: 'Harman 2200',
    repair_date: '10/07/2023',
    next_repair: '10/07/2024',
    value: '120,00',
    occurrence: 'Manutencao preventiva',
    service: 'Feito manutencao preventiva e limpeza',
    neighborhood: 'Jardim Triangulo',
    observation: 'Aquecedor, Duto e Flexiveis ok'
  },
  {
    id: v4(),
    name: 'Amanda Ghidini',
    phone: '9388849995',
    adreess: 'Rua Masato Sakai',
    residence_number: '180',
    residence_type: 'Apartamento',
    complement: 'Bloco 2 Apartamento 44',
    equipment: 'Harman 2200',
    repair_date: '10/07/2023',
    next_repair: '10/07/2024',
    value: '120,00',
    occurrence: 'Manutencao preventiva',
    service: 'Feito manutencao preventiva e limpeza',
    neighborhood: 'Jardim Triangulo',
    observation: 'Aquecedor, Duto e Flexiveis ok'
  }
]

class ClientsRepository {

  findAll() {
    return new Promise((resolve) => {
      resolve(clients);
    });
  }

  findById(id) {
    return new Promise((resolve) => resolve(
      clients.find((client) => client.id === id),
    ));
  }

  findByName(name) {
    return new Promise((resolve) => resolve(
      clients.find((client) => client.name === name),
    ));
  }

  findByPhone(phone) {
    return new Promise((resolve) => resolve(
      clients.find((client) => client.phone === phone),
    ))
  }

  delete(id) {
    return new Promise((resolve) => {
      clients = clients.filter((client) => client.id !== id);
      resolve()
    });
  }

  create({
    name, phone , adreess, residence_number, residence_type, complement, equipment, repair_date, next_repair, value, occurrence, service, neighborhood, observation
  }) {
    return new Promise((resolve) => {
      const newClient = {
        id: v4(),
        name,
        phone ,
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
      };

      clients.push(newClient);
      resolve(newClient);
    });
  }

  update(id, {
    name, phone, adreess, residence_number, residence_type, complement, equipment, repair_date, next_repair, value, occurrence, service, neighborhood, observation
  }) {
    return new Promise((resolve) => {
      const updatedClient = {
        id,
        name,
        phone ,
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
      };

      clients = clients.map((client) => (
        client.id === id ? updatedClient : client
      ));

      resolve(updatedClient);
    });
  }
}

module.exports = new ClientsRepository();
