const { Router } = require('express');
const ClientController = require('./app/controllers/ClientController');

const router = Router();

router.get('/clients', ClientController.index);
router.get('/clients/:id', ClientController.show);
router.delete('/clients/:id', ClientController.delete);
router.post('/clients', ClientController.store);

module.exports = router;
