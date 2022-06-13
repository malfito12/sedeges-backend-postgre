// ----------------------------------POSTGRES----------------------------
const pg = require('pg')

const database = () => {
    if (!pg) {
        console.log('base de datos NO CONECTADA')
    } else {
        const pool = new pg.Pool({
            host: 'localhost',
            user: 'root',
            password: 'root',
            port: '5432',
            database: 'prueba'
        })
        // const pool = new pg.Pool({
        //     host: 'ec2-3-223-213-207.compute-1.amazonaws.com',
        //     user: 'ysfqdhjvugerje',
        //     password: '116ff7aedfa19323a8e06608a92d97bb83eb5c4c0b1e76368a7bff5841fea1fa',
        //     port: '5432',
        //     database: 'dj3g747tins5p'
        // })
        // const pool = new pg.Pool({
        //     connectionString:'postgres://ysfqdhjvugerje:116ff7aedfa19323a8e06608a92d97bb83eb5c4c0b1e76368a7bff5841fea1fa@ec2-3-223-213-207.compute-1.amazonaws.com:5432/dj3g747tins5p',
        //     ssl:{
        //         rejectUnauthorized:false
        //     }
        // })

        return pool
    }
}

// --------------------------MYSQL-----------------------------
// const mysql = require('mysql')

// const database = () => {
//     if (!mysql) {
//         console.log('base de datos NO CONECTADA')
//     } else {
//         return mysql.createConnection({
//             host: 'localhost',
//             user: 'root',
//             password: 'secret',
//             port: '3306',
//             database: 'reactNative_tasks'
//         })
//     }
// }
module.exports = database