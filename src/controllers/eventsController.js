const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
const controllers = {}

controllers.postEvent = async (req, res) => {
    const params = req.body
    params["event_register_date"] = new Date()
    try {
        await conn.query(`INSERT INTO events VALUES ($1,$2,$3,$4,$5)`,
            [
                params.event_name,
                params.event_description,
                params.event_register_date,
                params.event_status,
                params.user_id
            ])
        res.status(200).json({ message: 'Evento Registrado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, Nose Pudo Registrar' })
    }
}

controllers.getEvents = async (req, res) => {
    try {
        const result = await conn.query(`SELECT * FROM events ORDER BY event_register_date DESC`)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la Base de Datos' })
    }
}

controllers.updateEvent = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        await conn.query(
            `UPDATE events SET event_name=$1,event_description=$2,event_status=$3 WHERE event_id=$4`,
            [params.event_name, params.event_description, params.event_status, req.params.id]
        )
        res.status(200).json({ message: 'Evento Actualizado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Pudo Actualizar' })
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

controllers.deleteEvent = async (req, res) => {
    try {
        await conn.query(`DELETE FROM events WHERE event_id=$1`, [req.params.id])
        res.status(200).json({ message: 'evento eliminado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Pudo Eliminar' })
    }
}

controllers.getResultTypeTestAptitudes = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { resultAp: false, resultIn: false, resultMM: false }
        const resultAp = await conn.query(`SELECT * FROM result_aptitudes WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const resultIn = await conn.query(`SELECT * FROM result_intereses WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])

        const result_test1 = await conn.query(`SELECT * FROM test1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test2 = await conn.query(`SELECT * FROM test2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test3 = await conn.query(`SELECT * FROM test3_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test4 = await conn.query(`SELECT * FROM test4_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test5_parte1 = await conn.query(`SELECT * FROM test5_parte1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test5_parte2 = await conn.query(`SELECT * FROM test5_parte2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test6 = await conn.query(`SELECT * FROM test6_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test7 = await conn.query(`SELECT * FROM test7_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])

        if (resultAp.rows.length > 0) {
            array.resultAp = true
        }
        if (resultIn.rows.length > 0) {
            array.resultIn = true
        }
        if (result_test1.rows.length > 0 && result_test2.rows.length > 0 && result_test3.rows.length > 0 && result_test4.rows.length > 0 && result_test5_parte1.rows.length > 0 && result_test5_parte2.rows.length > 0 && result_test6.rows.length > 0 && result_test7.rows.length > 0) {
            array.resultMM = true
        }
        // console.log(array)
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.getListStudentsResults = async (req, res) => {
    try {
        const result = await conn.query(
            `SELECT s.student_first_name,s.student_last_father_name,a.event_id,a.student_id
            FROM all_results a
            INNER JOIN students s ON s.student_id=a.student_id
            WHERE a.event_id=$1`,
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la Base de Datos' })
    }
}


//--------------------TEST REALIZADOS------------------------------
controllers.getCarriedOutRE = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { result_test1: false, result_test2: false }
        const result_test1 = await conn.query(`SELECT * FROM test1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test2 = await conn.query(`SELECT * FROM test2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        if (result_test1.rows.length > 0) {
            array.result_test1 = true
        }
        if (result_test2.rows.length > 0) {
            array.result_test2 = true
        }
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}
controllers.getCarriedOutRL = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { result_test3: false, result_test4: false }
        const result_test3 = await conn.query(`SELECT * FROM test3_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test4 = await conn.query(`SELECT * FROM test4_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        if (result_test3.rows.length > 0) {
            array.result_test3 = true
        }
        if (result_test4.rows.length > 0) {
            array.result_test4 = true
        }
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}
controllers.getCarriedOutRN = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { result_test5_parte1: false, result_test5_parte2: false, result_test6: false }
        const result_test5_parte1 = await conn.query(`SELECT * FROM test5_parte1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test5_parte2 = await conn.query(`SELECT * FROM test5_parte2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test6 = await conn.query(`SELECT * FROM test6_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        if (result_test5_parte1.rows.length > 0) {
            array.result_test5_parte1 = true
        }
        if (result_test5_parte2.rows.length > 0) {
            array.result_test5_parte2 = true
        }
        if (result_test6.rows.length > 0) {
            array.result_test6 = true
        }
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.getCarriedOutCV = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { result_test7: false }
        const result_test7 = await conn.query(`SELECT * FROM test7_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        if (result_test7.rows.length > 0) {
            array.result_test7 = true
        }
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}
controllers.getCarriedOutMadurezAll = async (req, res) => {
    var event_id = req.query.event_id
    var student_id = req.query.student_id
    try {
        const array = { 
            result_testRE: false,
            result_testRL: false,
            result_testRN: false,
            result_testCV: false,
        }
        const result_test1 = await conn.query(`SELECT * FROM test1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test2 = await conn.query(`SELECT * FROM test2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test3 = await conn.query(`SELECT * FROM test3_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test4 = await conn.query(`SELECT * FROM test4_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test5_parte1 = await conn.query(`SELECT * FROM test5_parte1_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test5_parte2 = await conn.query(`SELECT * FROM test5_parte2_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test6 = await conn.query(`SELECT * FROM test6_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        const result_test7 = await conn.query(`SELECT * FROM test7_madurez_resultados WHERE student_id=$1 AND event_id=$2`, [parseInt(student_id), parseInt(event_id)])
        if (result_test1.rows.length > 0 && result_test2.rows.length > 0) {
            array.result_testRE = true
        }
        if (result_test3.rows.length > 0 && result_test4.rows.length > 0) {
            array.result_testRL = true
        }
        if (result_test5_parte1.rows.length > 0 && result_test5_parte2.rows.length > 0 && result_test6.rows.length > 0) {
            array.result_testRN = true
        }
        if (result_test7.rows.length > 0) {
            array.result_testCV = true
        }
        // console.log(array)
        res.status(200).json(array)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }

}
module.exports = controllers