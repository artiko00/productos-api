const express = require('express')
const router = express.Router()
const { getProductos, getProducto } = require('../controller')

router.get('/productos', getProductos)
router.get('/producto', getProducto)

module.exports = { router }