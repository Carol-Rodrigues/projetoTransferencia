const mysql = require("mysql")

const conectar = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'OhShit!669',
    porta: 3306,
    database: 'db_exercicio'
})

conectar.connect((err) => {
    if (err) throw err
    console.log("Nos conectamos ao MySQL.")
})

module.exports = conectar