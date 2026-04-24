const express = require('express');
const router = express.Router();
const controller = require('../controllers/ConsultaController');

router.post('/', controller.criarConsulta);
router.get('/', controller.listarConsultas);
router.put('/:id', controller.atualizarConsulta);
router.delete('/:id', controller.deletarConsulta);

module.exports = router;