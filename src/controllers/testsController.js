const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
const controllers = {}


//------------------------------------TEST NORMALES----------------------------------
controllers.getTests = async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM tests ORDER BY test_name ASC')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300)
    }
}

controllers.getTestsStatus = async (req, res) => {
    // try {
    //     const result = await conn.query(
    //         'SELECT * FROM tests WHERE test_status'//status_id= true
    //         // 'SELECT * FROM tests WHERE NOT status_test'//status_id=false
    //     )
    //     res.status(200).json(result.rows)
    // } catch (error) {
    //     console.log(error)
    //     res.status(300).json({ message: 'error en la base de datos' })
    // }
}
controllers.getTest = async (req, res) => {
    try {
        const result = await conn.query(
            'SELECT * FROM tests WHERE test_id=$1',
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.postTest = async (req, res) => {
    const params = req.body
    // console.log(params)
    var aux;
    if (params.test_description === '') aux = null;
    else aux = params.test_description;
    try {
        await conn.query(
            'INSERT INTO tests VALUES ($1,$2,$3,$4,$5)',
            [params.test_name, aux, params.test_register_date, params.test_status, params.user_id]
        )
        await conn.query(
            'INSERT INTO tests_aptitudes VALUES ($1,$2,$3,$4,$5)',
            [params.test_name, aux, params.test_register_date, params.test_status, params.user_id]
        )
        await conn.query(
            'INSERT INTO tests_intereses VALUES ($1,$2,$3,$4,$5)',
            [params.test_name, aux, params.test_register_date, params.test_status, params.user_id]
        )
        res.status(200).json({ message: 'test registrado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.updateTest = async (req, res) => {
    const params = req.body
    try {
        await conn.query(
            'UPDATE tests SET test_name=$1, test_description=$2, test_status=$3 WHERE test_id=$4',
            [params.test_name, params.test_description, params.test_status, req.params.id]
        )
        await conn.query(
            'UPDATE tests_aptitudes SET test_aptitud_name=$1, test_aptitud_description=$2, test_aptitud_status=$3 WHERE test_aptitud_id=$4',
            [params.test_name, params.test_description, params.test_status, req.params.id]
        )
        await conn.query(
            'UPDATE tests_intereses SET test_interes_name=$1, test_interes_description=$2, test_interes_status=$3 WHERE test_interes_id=$4',
            [params.test_name, params.test_description, params.test_status, req.params.id]
        )
        res.status(200).json({ message: 'test actualizado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.deleteTest = async (req, res) => {
    try {
        await conn.query(
            'DELETE FROM tests WHERE test_id=$1',
            [req.params.id]
        )
        await conn.query(
            'DELETE FROM tests_aptitudes WHERE test_aptitud_id=$1',
            [req.params.id]
        )
        await conn.query(
            'DELETE FROM tests_intereses WHERE test_interes_id=$1',
            [req.params.id]
        )
        res.status(200).json({ message: 'test eliminado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

//------------------------------------TEST APTITUDES----------------------------------------
controllers.getTestsAptitudesStatus = async (req, res) => {
    try {
        const result = await conn.query(
            'SELECT * FROM tests_aptitudes WHERE test_aptitud_status'//status_id= true
            // 'SELECT * FROM tests WHERE NOT status_test'//status_id=false
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

//------------------------------------TEST INTERESES----------------------------------------
controllers.getTestsInteresesStatus = async (req, res) => {
    try {
        const result = await conn.query(
            'SELECT * FROM tests_intereses WHERE test_interes_status'//status_id= true
            // 'SELECT * FROM tests WHERE NOT status_test'//status_id=false
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}
module.exports = controllers