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
        res.status(200).json({ message: 'datos registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

module.exports = controllers