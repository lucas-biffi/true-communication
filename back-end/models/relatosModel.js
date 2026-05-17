const db = require('../db');


// LISTAR
async function listarRelatos() {

    const [rows] = await db.query(
        'SELECT * FROM relatos ORDER BY data_registro DESC'
    );

    return rows;
}


// CRIAR
async function criarRelato({
    tipo_golpe,
    tipo_contato,
    data_tentativa,
    numero,
    banco,
    descricao
}) {

    const sql = `
        INSERT INTO relatos
        (tipo_golpe, tipo_contato, data_tentativa, numero, banco, descricao)
        VALUES (?, ?, ?, ?, ?, ?)
    `;

    const valores = [
        tipo_golpe,
        tipo_contato,
        data_tentativa,
        numero,
        banco,
        descricao
    ];

    const [result] = await db.query(sql, valores);

    return result.insertId;
}


module.exports = {
    listarRelatos,
    criarRelato
};
