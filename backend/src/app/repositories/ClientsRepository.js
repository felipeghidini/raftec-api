const { v4 } = require('uuid');

let clients = [{
    id: v4(),
    name: 'Felipe Ghidini',
    phone: '9388849995',
    adreess: 'Rua Masato Sakai',
    residence_number: '180',
    residence_type: 'Apartamento',
    complement: 'Bloco 2 Apartamento 44',
    equipament: 'Harman 2200',
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
    equipament: 'Harman 2200',
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

  delete(id) {
    return new Promise((resolve) => {
      clients = clients.filter((client) => client.id !== id);
      resolve()
    });
  }
}

module.exports = new ClientsRepository();
