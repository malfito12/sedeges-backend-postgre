const controllers = {}
const dbConnection = require('../database/dbConnections')
const crypto = require('crypto')
const conn = dbConnection()

controllers.getUsers = async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM users')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
    }
}

controllers.postUsers = async (req, res) => {
    const params = req.body
    // console.log(params)
    params["user_password"] = crypto.createHash('md5').update(params.user_password).digest('hex')
    // console.log(params)
    try {
        const existUser=await conn.query(`SELECT * FROM users WHERE user_name=$1`,[params.user_name])
        const existEmail=await conn.query(`SELECT * FROM users WHERE user_email=$1`,[params.user_email])
        if(existUser.rows.length>0){
            res.status(300).json({message:'El usuario ya existe, intente otro nombre de usuario'})
        }else if(existEmail.rows.length>0){
            res.status(300).json({message:'El Correo Electronico ya existe, intente con otro Correo'})
        }else{
            await conn.query(
                'INSERT INTO users VALUES ($1, $2, $3, $4, $5)',
                [params.user_name, params.user_email, params.user_password, params.user_repeat_password, params.user_rol]
            )
            res.status(200).json({ message: 'usuario Registrado' })
        }
    } catch (error) {
        res.status(300).json({ message: 'error, no se pudo registro al usuario' })
        console.log(error)
    }
}

controllers.deleteUser = async (req, res) => {
    const params = req.params.id
    try {
        await conn.query(
            'DELETE FROM users WHERE user_id=$1', [params]
        )
        res.status(200).json({ message: 'Usuario Eliminado' })
    } catch (error) {
        res.status(300).json({message:'Error, No se pudo eliminar al usuario'})
        console.log(error)
    }
    console.log(params)
}

controllers.editUser = async (req, res) => {
    const data = req.body
    const id = req.params.id
    try {
        const existUser=await conn.query(`SELECT * FROM users WHERE user_name=$1`,[data.user_name])
        const existEmail=await conn.query(`SELECT * FROM users WHERE user_email=$1`,[data.user_email])
        if(existUser.rows.length>0){
            res.status(300).json({message:'El usuario ya existe'})
        }else if(existEmail.rows.length>0){
            res.status(300).json({message:'El Correo Electronico ya existe'})
        }else{
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
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, No se pudo Actualizar'})
    }
}

controllers.getUser = async (req, res) => {
    const id = req.params.id
    try {
        const result = await conn.query('SELECT * FROM users WHERE user_id=$1', [id])
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.updateEmail=async(req,res)=>{
    const params=req.body
    try {
        const emailExist= await conn.query(`SELECT * FROM users WHERE user_email=$1`,[params.user_email])
        if(emailExist.rows.length>0){
            res.status(300).json({message:'El Correo Electronico ya existe'})
            return
        }else{
            await conn.query(`UPDATE users SET user_email=$1 WHERE user_id=$2`,[params.user_email,req.params.id])
            res.status(200).json({message:'Correo Electronico Actualizado'})
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, no se pudo Actualizar el Email'})
    }
}

controllers.updatePassword=async(req,res)=>{
    const params=req.body
    try {
        const matchPassword=await conn.query(`SELECT * FROM users WHERE user_id=$1`,[params.user_id])
        if(matchPassword.rows[0].user_repeat_password===params.user_previous_password){
            params["user_new_password"] = crypto.createHash('md5').update(params.user_new_password).digest('hex')
            await conn.query(`UPDATE users SET user_password=$1, user_repeat_password=$2 WHERE user_id=$3`,[params.user_new_password,params.user_repeat_password,req.params.id])
            res.status(200).json({message:'Contraseña Actualizada'})
        }else{
            res.status(300).json({message:'La Contraseña Anterior no Coincide'})
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, No se pudo Cambiar la Contraseña'})
    }
}

module.exports = controllers