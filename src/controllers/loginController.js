const dbConnection=require('../database/dbConnections')
const conn=dbConnection()
const jwt=require('jsonwebtoken')
const crypto=require('crypto')
const keycypher='password123456'

const controllers={}

controllers.login=(async(req,res)=>{
    const params=req.body
    // console.log(params)
    var passwordCrypto=crypto.createHash('md5').update(params.password).digest('hex')
    // console.log(passwordCrypto)
    try {
        const result=await conn.query(
            `SELECT * FROM usuarios WHERE nombre=$1 and password=$2`,
            [params.nombre,passwordCrypto]
        )
        // console.log(result.rows)
        if(result.rows.length>0){
            try {
                var id_user=result.rows[0].id_usuario
                var token=jwt.sign({user_name:params.nombre,user_pass:passwordCrypto},keycypher)
                return res.status(200).json({"token":token,'user':id_user})
                // return console.log(token)
            } catch (error) {
                return res.status(300).json({message:'error con jwt'})
            }
        }else{
            return res.status(300).json({message:'error no existe dato'})
        }
    } catch (error) {
        console.log(error)
    }
})

controllers.logout=(async(req,res)=>{
    res.json({message:'deslogeado'})
})
module.exports=controllers