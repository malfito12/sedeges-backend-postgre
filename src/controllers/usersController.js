const controllers = {}
const dbConnection = require('../database/dbConnections')
const crypto=require('crypto')
const conn = dbConnection()

controllers.getUsers = (async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM usuarios')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
    }
})

controllers.postUsers = (async (req, res) => {
    const params = req.body
    params["password"]=crypto.createHash('md5').update(params.password).digest('hex')
    // console.log(params)
    try {
        await conn.query(
            'INSERT INTO usuarios VALUES ($1, $2, $3, $4)',
            [params.nombre, params.email, params.password, params.repeat_password]
        )
        res.status(200).json({message:'usuario registrado'})
    } catch (error) {
        console.log(error)
    }
})

module.exports = controllers