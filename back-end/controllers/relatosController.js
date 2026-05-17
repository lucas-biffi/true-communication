const relatosModel = require('../models/relatosModel');


// LISTAR
exports.listar = async (req, res) => {
    try {
        const relatos = await relatosModel.listarRelatos();

        res.json(relatos);

    } catch (err) {
        console.error(err);

        res.status(500).json({
            mensagem: 'Erro ao buscar relatos',
            erro: err.message
        });
    }
};


// CRIAR
exports.criar = async (req, res) => {

    try {

        const {
            tipo_golpe,
            tipo_contato,
            data_tentativa,
            numero,
            banco,
            descricao
        } = req.body;


        const id = await relatosModel.criarRelato({
            tipo_golpe,
            tipo_contato,
            data_tentativa,
            numero,
            banco,
            descricao
        });

        res.status(201).json({
            mensagem: 'Relato cadastrado com sucesso!',
            id
        });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            mensagem: 'Erro ao cadastrar relato',
            erro: err.message
        });
    }
};
