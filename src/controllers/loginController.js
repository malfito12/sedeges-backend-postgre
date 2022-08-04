const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
const jwt = require('jsonwebtoken')
const crypto = require('crypto')
const keycypher = 'password123456'
const nodemailer=require('nodemailer')

const controllers = {}

controllers.login = (async (req, res) => {
    const params = req.body
    console.log(params)
    // console.log('hola')
    var passwordCrypto = crypto.createHash('md5').update(params.user_password).digest('hex')
    // console.log(passwordCrypto)
    try {
        const existUser=await conn.query(`SELECT * FROM users WHERE user_name=$1`,[params.user_name])
        if(existUser.rows.length===0){
            res.status(300).json({message:'El Usuario no Existe'})
        }else{
            const result = await conn.query(
                `SELECT * FROM users WHERE user_name=$1 AND user_password=$2`,
                [params.user_name, passwordCrypto]
            )
            // console.log(result.rows)
            if (result.rows.length > 0) {
                try {
                    var user_id = result.rows[0].user_id
                    var user_rol = result.rows[0].user_rol
                    var token = jwt.sign({ user_name: params.user_name, user_pass: passwordCrypto }, keycypher)
                    return res.status(200).json({ "token": token, 'user': user_id, 'rol': user_rol })
                    // return console.log(token)
                } catch (error) {
                    return res.status(300).json({ message: 'error con jwt' })
                }
            } else {
                return res.status(300).json({ message: 'Contraseña Incorrecta' })
            }
        }
    } catch (error) {
        console.log(error)
    }
})

controllers.logout = (async (req, res) => {
    res.json({ message: 'deslogeado' })
})

controllers.recoverPassword = async (req, res,) => {
    const params = req.body
    // console.log(params)
    try {
        const result=await conn.query(
            `SELECT * FROM users WHERE user_email=$1 AND user_name=$2`,
            [params.user_email,params.user_name]
        )
        if(result.rows.length>0){
            var transporter = nodemailer.createTransport({
                host: 'smtp.gmail.com',
                port: 465,
                secure: true,
                auth: {
                    user:"alextufielamigo@gmail.com",//email para desde donde se enviará los msn
                    pass:'rbkzfvecosnwlskc' //crear password desde gmail
                }
        
            })
            var mailOptions = {
                from: 'Llega desde el correo alextufielamigo@gmail.com ',
                to: params.user_email, //email a donde va ir el msn
                subject: "enviado desde SEDEGES",

                text: `
                Usuario: ${result.rows[0].user_name}
                Contraseña: ${result.rows[0].user_repeat_password}` //informacion que se le enviará
            }
            transporter.sendMail(mailOptions, (error, info) => {
                if (error) {
                    res.status(500).send(error.message)
                } else {
                    console.log("email enviado")
                    res.status(200).json({message:'mensaje enviado'})
                }
            })
        }else{
            res.status(300).json({message:'Error no se tiene registrado el Email'})
            // console.log(error)
            // res.status(300).json()
        }
    } catch (error) {
        
    }
    
}
module.exports = controllers