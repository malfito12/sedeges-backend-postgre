const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.post_result_test1 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO result_t1_special_relations VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
                [
                    params[i].title,
                    params[i].factor,
                    params[i].pregunta,
                    params[i].respuesta,
                    params[i].respCorrecta,
                    new Date(),
                    params[i].user_id,
                    params[i].student_id,
                    params[i].event_id
                ]
            )
        }
        // const result = await conn.query(
        //     `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
        //     [params[0].student_id, params[0].event_id]
        // )
        // if (result.rows.length === 0) {
        //     await conn.query(
        //         `INSERT INTO all_results VALUES ($1,$2,$3)`,
        //         [params[0].user_id, params[0].student_id, params[0].event_id]
        //     )
        // }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}

controllers.post_result_test2 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO result_t2_special_relations VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
                [
                    params[i].title,
                    params[i].factor,
                    params[i].pregunta,
                    params[i].respuesta,
                    params[i].respCorrecta,
                    new Date(),
                    params[i].user_id,
                    params[i].student_id,
                    params[i].event_id,
                ]
            )
        }
        // const result = await conn.query(
        //     `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
        //     [params[0].student_id, params[0].event_id]
        // )
        // if (result.rows.length === 0) {
        //     await conn.query(
        //         `INSERT INTO all_results VALUES ($1,$2,$3)`,
        //         [params[0].user_id, params[0].student_id, params[0].event_id]
        //     )
        // }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
module.exports = controllers