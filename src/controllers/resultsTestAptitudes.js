const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.post_result_test_aptitudes = async (req, res) => {
    const params = req.body
    // console.log(params[0].respuestas.pregunta1)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query('INSERT INTO result_test_aptitudes VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)',
                [
                    params[i].respuestas.pregunta1,
                    params[i].respuestas.pregunta2,
                    params[i].respuestas.pregunta3,
                    params[i].respuestas.pregunta4,
                    params[i].respuestas.pregunta5,
                    params[i].seccion,
                    new Date(),
                    params[i].user_id,
                    params[i].student_id,
                    params[i].test_aptitud_id
                ]
            )
        }
        res.status(200).json({ message: 'datos registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.getListStudentAptitud = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await conn.query(
            `SELECT DISTINCT s.student_first_name,s.student_last_name,s.student_id,t.test_aptitud_id 
            FROM result_test_aptitudes t 
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE test_aptitud_id=$1`,
            [req.params.id]
        )
        // console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.getStudentResultAptitud = async (req, res) => {
    const params=req.body
    try {
        const result = await conn.query(
            `SELECT t.pregunta1,t.pregunta2,t.pregunta3,t.pregunta4,t.pregunta5,t.seccion,s.student_first_name,s.student_last_name
            FROM result_test_aptitudes t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.test_aptitud_id=$2`,
            // [req.params.id,]
            [params.student_id,params.test_id]
        )
        // console.log(result.rows)
        res.status(200).json(result.rows)
        // const ss=result.rows
        // console.log(ss.length)
        // const array = []
        // for (var i = 0; i < ss.lenght; i++) {
        //     console.log('entra')
        //     var sum = parseInt(ss[i].pregunta1) + parseInt(ss[i].pregunta2) + parseInt(ss[i].pregunta3) + parseInt(ss[i].pregunta4) + parseInt(ss[i].pregunta5)
        //     array.push({
        //         totalSeccion: sum,
        //         name: ss[0].student_first_name,
        //         lastName: ss[0].student_last_name,
        //     })
        // }
        // console.log(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

module.exports = controllers