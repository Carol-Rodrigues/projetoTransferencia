const rotas = require("express").Router()
const conexao = require("./config/conexao")

rotas.get("/", (req, res) => {
    let sql = "select * from tb_transferencias"
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows)
    })
})

rotas.get('/:id', (req, res) => {
    const { id } = req.params
    let sql = 'select * from tb_transferencias where id_transferencia = ?'
    conexao.query(sql, [id], (erro, rows, fields) => {
        if (erro) throw erro
        res.json(rows[0])
    })
})

rotas.delete('/:id', (req, res) => {
    const { id } = req.params
    let sql = `delete from tb_transferencias where id_transferencia = '${id}'`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: 'transferencia excluída com sucesso' })
    })
})

rotas.post('/', (req, res) => {
    const { nomeCliente, valor, contaCliente } = req.body
    let sql = `insert into tb_transferencias (nomeCliente, valor, contaCliente) values('${nomeCliente}', '${valor}', '${contaCliente}')`
    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "transferencia incluída com sucesso" })
    })
})

rotas.put('/:id', (req, res) => {
    const { id } = req.params
    const { nomeCliente, valor, contaCliente } = req.body
    let sql = `update tb_transferencias set
    nomeCliente = '${nomeCliente}', valor = '${valor}', contaCliente = '${contaCliente}' where id_transferencia = '${id}'`


    conexao.query(sql, (erro, rows, fields) => {
        if (erro) throw erro
        res.json({ status: "transferencia editada com sucesso" })
    })

})

module.exports = rotas