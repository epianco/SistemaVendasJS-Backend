const express = require('express');

const UsuarioController = require('../controllers/usuarioController.js');
const ProdutoController = require('../controllers/produtoController.js');
const PedidoController  = require('../controllers/pedidoController.js');
const OrderController  = require('../controllers/orderController.js');




const router = express.Router();

router.post('/usuarios', UsuarioController.Insert);
router.get('/usuarios', UsuarioController.SelectAll);
router.get('/usuarios/:id', UsuarioController.SelectDetail);
router.put('/usuarios/:id', UsuarioController.Update);
router.delete('/usuarios/:id', UsuarioController.Delete);

// ROTAS PRODUTO
router.post('/produtos', ProdutoController.Insert);
router.get('/produtos', ProdutoController.SelectAll);
router.get('/produtos/:id', ProdutoController.SelectDetail);
router.put('/produtos/:id', ProdutoController.Update);
router.delete('/produtos/:id', ProdutoController.Delete);

// ROTAS PEDIDO
router.post('/pedidos',         PedidoController.Insert);
router.get('/pedidos',          PedidoController.SelectAll);
router.get('/pedidos/:id',      PedidoController.SelectDetail);
router.put('/pedidos/:id',      PedidoController.Update);
router.delete('/pedidos/:id',   PedidoController.Delete);

// ROTAS PEDIDO
//Rotas dos pedidos
router.post('/orders', OrderController.Insert);
router.get('/orders', OrderController.SelectAll);
router.delete('/orders/:id', OrderController.Delete);

module.exports = router;