const dbConnection=require('../database/dbConnections')
const conn=dbConnection()
const jwt=require('jsonwebtoken')
const crypto=require('crypto')
const keycypher='password123456'

const controllers={}

controllers.login=(async(req,res)=>{
    const params=req.body
    // console.log(params)
    // console.log('hola')
    var passwordCrypto=crypto.createHash('md5').update(params.user_password).digest('hex')
    // console.log(passwordCrypto)
    try {
        const result=await conn.query(
            `SELECT * FROM users WHERE user_name=$1 and user_password=$2`,
            [params.user_name,passwordCrypto]
        )
        // console.log(result.rows)
        if(result.rows.length>0){
            try {
                var user_id=result.rows[0].user_id
                var user_rol=result.rows[0].user_rol
                var token=jwt.sign({user_name:params.user_name,user_pass:passwordCrypto},keycypher)
                return res.status(200).json({"token":token,'user':user_id,'rol':user_rol})
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