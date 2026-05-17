const express = require('express');
const router = express.Router();
const relatosController = require('../controllers/relatosController');

router.get('/', relatosController.listar);
router.post('/', relatosController.criar);

module.exports = router;
