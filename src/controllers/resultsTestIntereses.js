const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.post_result_test_intereses = async (req, res) => {
    const params = req.body
    // console.log(params[0].respuestas.pregunta1)
    try {
        for (var i = 0; i < params.length; i++) {
            // await conn.query('INSERT INTO result_test_aptitudes VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
            await conn.query('INSERT INTO result_intereses VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
                [
                    params[i].seccion,
                    params[i].respuestas.pregunta1,
                    params[i].respuestas.pregunta2,
                    params[i].respuestas.pregunta3,
                    params[i].respuestas.pregunta4,
                    params[i].respuestas.pregunta5,
                    params[i].respuestas.pregunta6,
                    new Date(),
                    params[i].user_id,
                    params[i].student_id,
                    params[i].event_id
                ]
            )
        }
        const result=await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id,params[0].event_id]
        )
        if(result.rows.length===0){
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3)`,
                [params[0].user_id,params[0].student_id,params[0].event_id]
            )
        }
        res.status(200).json({ message: 'datos registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.getListStudentInteres=async(req,res)=>{
    try {
        const result=await conn.query(
            `SELECT DISTINCT s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_id,t.event_id
            FROM result_intereses t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE event_id=$1`,
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error en la base de datos'})
    }
}

controllers.getStudentResultInteres=async(req,res)=>{
    const params=req.body
    try {
        const result=await conn.query(
            `SELECT t.pregunta1,t.pregunta2,t.pregunta3,t.pregunta4,t.pregunta5,t.pregunta6,t.seccion,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM result_intereses t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [params.student_id,params.event_id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}

module.exports = controllers