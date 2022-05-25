const mysql = require('mysql2/promise')

const config = require('../config.js')

exports.all = async function (query) {
    try {
        const conn = await mysql.createConnection(config)

        const [rows, fields] = await conn.execute(query)

        console.log('connection is true')

        conn.end()

        return rows

    } catch (e) {
        console.error(e)
    }
}

exports.send = async function (query) {
    try {
        const conn = await mysql.createConnection(config)

        conn.query(query)

        conn.end()
    } catch (e) {

        console.error(e)
        
    }
}