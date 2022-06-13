const dbConnection=require('../database/dbConnections')
const conn=dbConnection()
const controllers={}

controllers.getTests=async(req,res)=>{
    try {
        const result =await conn.query('SELECT * FROM tests ORDER BY test_name ASC')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300)
    }
}

controllers.getTestsStatus=async(req,res)=>{
    try {
        const result=await conn.query(
            'SELECT * FROM tests WHERE test_status'//status_id= true
            // 'SELECT * FROM tests WHERE NOT status_test'//status_id=false
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}
controllers.getTest=async(req,res)=>{
    try {
        const result=await conn.query(
            'SELECT * FROM tests WHERE test_id=$1',
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}

controllers.postTest=async(req,res)=>{
    const params= req.body
    console.log(params)
    var aux;
    if(params.test_description==='') aux=null;
    else aux=params.test_description;
    try {
        await conn.query(
            'INSERT INTO tests VALUES ($1,$2,$3,$4,$5)',
            [params.test_name,aux,params.test_register_date,params.test_status,params.user_id]
            )
        res.status(200).json({message:'test registrado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}

controllers.updateTest=async(req,res)=>{
    const params=req.body
    try {
        await conn.query(
            'UPDATE tests SET test_name=$1, test_description=$2, test_status=$3 WHERE test_id=$4',
            [params.test_name,params.test_description,params.test_status,req.params.id]
            )
        res.status(200).json({message:'test actualizado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}

controllers.deleteTest=async(req,res)=>{
    try {
        await conn.query(
            'DELETE FROM tests WHERE test_id=$1',
            [req.params.id]
        )
        res.status(200).json({message:'test eliminado'})
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}
module.exports=controllers