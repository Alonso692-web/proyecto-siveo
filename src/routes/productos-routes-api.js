const express = require('express')
const productosControllerApi = require('../controllers/productos-controller-api')
const router = express.Router();

//La Ruta (End Point) GET de todas las categorias 
router.get('/',productosControllerApi.getTodosProductos);

module.exports = router;