const controllers = {}
const dbConnection = require('../database/dbConnections')
const crypto = require('crypto')
const conn = dbConnection()

controllers.getUsers = (async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
    }
})

controllers.postUsers = (async (req, res) => {
    const params = req.body
    params["user_password"] = crypto.createHash('md5').update(params.user_password).digest('hex')
    // console.log(params)
    try {
        await conn.query(
            'INSERT INTO users VALUES ($1, $2, $3, $4, $5)',
            [params.user_name, params.user_email, params.user_password, params.user_repeat_password,params.user_rol]
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
            'DELETE FROM users WHERE user_id=$1', [params]
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
            'UPDATE users SET user_name=$1, user_email=$2, user_password=$3, user_repeat_password=$4, user_rol=$5 WHERE user_id=$6',
            [
                data.user_name,
                data.user_email,
                data.user_password,
                data.user_repeat_password,
                data.user_rol,
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
        const result=await conn.query('SELECT * FROM users WHERE user_id=$1',[id])
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
})

module.exports = controllers