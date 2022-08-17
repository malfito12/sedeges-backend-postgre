const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
const controllers = {}

controllers.postEvent=async(req,res)=>{
    const params=req.body
    params["event_register_date"]=new Date()
    try {
        await conn.query(`INSERT INTO events VALUES ($1,$2,$3,$4,$5)`,
        [
            params.event_name,
            params.event_description,
            params.event_register_date,
            params.event_status,
            params.user_id
        ])
        res.status(200).json({message:'Evento Registrado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, Nose Pudo Registrar'})
    }
}

controllers.getEvents=async(req,res)=>{
    try {
        const result=await conn.query(`SELECT * FROM events ORDER BY event_register_date DESC`)
        res.status(200).json(result.rows)
    } catch (error) {
        console(err)
        res.status(300).json({message:'Error en la Base de Datos'})
    }
}

controllers.updateEvent=async(req,res)=>{
    const params=req.body
    console.log(params)
    try {
        await conn.query(
            `UPDATE events SET event_name=$1,event_description=$2,event_status=$3 WHERE event_id=$4`,
            [params.event_name,params.event_description,params.event_status,req.params.id]
        )
        res.status(200).json({message:'Evento Actualizado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, No se Pudo Actualizar'})
    }
}

controllers.getEventStatus = async (req, res) => {
    // console.log('entra')
    try {
        const result = await conn.query(
            'SELECT * FROM events WHERE event_status'//status_id= true
            // 'SELECT * FROM tests WHERE NOT status_test'//status_id=false
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.deleteEvent=async(req,res)=>{
    try {
        await conn.query(`DELETE FROM events WHERE event_id=$1`,[req.params.id])
        res.status(200).json({message:'evento eliminado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error, No se Pudo Eliminar'})
    }
}

controllers.getResultTypeTestAptitudes=async(req,res)=>{
    var event_id=req.query.event_id
    var student_id=req.query.student_id
    try {
        const result=await conn.query(`SELECT * FROM result_aptitudes WHERE student_id=$1 AND event_id=$2`,[parseInt(student_id),parseInt(event_id)])
        if(result.rows.length>0){
            res.status(200).json({message:true})
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}
controllers.getResultTypeTestIntereses=async(req,res)=>{
    var event_id=req.query.event_id
    var student_id=req.query.student_id
    // console.log('entra')
    try {
        const result=await conn.query(`SELECT * FROM result_intereses WHERE student_id=$1 AND event_id=$2`,[parseInt(student_id),parseInt(event_id)])
        if(result.rows.length>0){
            res.status(200).json({message:true})
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}

module.exports=controllers