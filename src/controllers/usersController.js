const controllers = {}
const dbConnection = require('../database/dbConnections')
const crypto = require('crypto')
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
    params["password"] = crypto.createHash('md5').update(params.password).digest('hex')
    // console.log(params)
    try {
        await conn.query(
            'INSERT INTO usuarios VALUES ($1, $2, $3, $4)',
            [params.nombre, params.email, params.password, params.repeat_password]
        )
        res.status(200).json({ message: 'usuario registrado' })
    } catch (error) {
        console.log(error)
    }
})

controllers.deleteUser = (async (req, res) => {
    const params = req.params.id
    try {
        await conn.query(
            'DELETE FROM usuarios WHERE id_usuario=$1', [params]
        )
        res.status(200).json({ message: 'usuario eliminado' })
    } catch (error) {
        console.log(error)
    }
    console.log(params)
})

controllers.editUser = (async (req, res) => {
    const data = req.body
    const id = req.params.id
    try {
        await conn.query(
            'UPDATE usuarios SET nombre=$1, email=$2, password=$3, repeat_password=$4 WHERE id_usuario=$5',
            [
                data.nombre,
                data.email,
                data.password,
                data.repeat_password,
                id
            ]
        )
        res.status(200).json({ message: 'usuario actualizado' })
    } catch (error) {
        console.log(error)
    }
})

controllers.getUser=(async(req,res)=>{
    const id=req.params.id
    try {
        const result=await conn.query('SELECT * FROM usuarios WHERE id_usuario=$1',[id])
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
})

module.exports = controllers