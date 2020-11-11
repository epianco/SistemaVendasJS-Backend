const Pedido = require('../models/pedido');

const status = require('http-status');

exports.Insert = (req, res, next) => {
    const cliente    = req.body.cliente;
    const produto = req.body.produto;
    const preco = req.body.preco;
    const qtd = req.body.qtd;
    

    Pedido.create({
        cliente: cliente,
        produto: produto,
        preco: preco,
        qtd: qtd
    })

    .then(pedido =>{
        if(pedido){
            res.status(status.OK).send(pedido);
        }else{
            res.status(status.NOT_FOUND).send();
        }
    })

    .catch(error => next(error));
};


exports.SelectAll = (req, res, next) => {

    Pedido.findAll()
        .then(pedido => {
            if(pedido) {
                res.status(status.OK).send(pedido);
            }
        })
        .catch(error => next(error));
}

exports.SelectDetail = (req, res, next) => {
    const id = req.params.id;

    Pedido.findByPk(id)
        .then(pedido => {
            if(pedido){
                res.status(status.OK).send(pedido);
            }else{
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error =>next(error));
};


exports.Update = (req, res, next) => {
    const id = req.params.id;
    const cliente = req.body.cliente;    
    const produto = req.body.produto;
    const preco   = req.body.preco;
    const qtd= req.body.qtd;
    
    Pedido.findByPk(id)
        .then(pedido =>{
            if(pedido) {
                pedido.update({
                    cliente: cliente,
                    produto: produto,
                    preco: preco,
                    qtd: qtd

                },

                    {
                        where: {id: id}
                    })
                    .then(() => {
                        res.status(status.OK).send();
                    })
                    .catch(error => next (error));
            }else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};

exports.Delete = (req, res, next) => {
    const id = req.params.id;

    Pedido.findByPk(id)
        .then(pedido =>{
            if(pedido) {
                pedido.destroy({
                    where: {id: id}
                })
                    .then(() =>{
                        res.status(status.OK).send();
                    })
                    .catch(error => next(error));
            }else {
                res.status(status.NOT_FOUND).send();
            }
        })
        .catch(error => next(error));
};