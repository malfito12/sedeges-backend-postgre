const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
const controllers = {}

controllers.getReceptions = async (req, res) => {
    try {
        const result = await conn.query(`SELECT * FROM reception_centers`)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}

controllers.postReceptions = async (req, res) => {
    const params = req.body
    console.log(params)
    // params ['reception_register_date']=new Date()
    try {
        await conn.query(
            `INSERT INTO reception_centers VALUES ($1,$2,$3,$4,$5)`,
            [params.reception_name, params.reception_municipio, params.reception_localidad, new Date(), params.user_id]
        )
        res.status(200).json({ message: 'Centro Registrado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Pudo Registrar' })
    }
}

controllers.updateReceptions = async (req, res) => {
    const params = req.body
    try {
        await conn.query(
            `UPDATE reception_centers SET reception_name=$1,reception_municipio=$2,reception_localidad=$3 WHERE reception_id=$4`,
            [params.reception_name, params.reception_municipio, params.reception_localidad, req.params.id]
        )
        res.status(200).json({ message: 'Centro Actualizado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Pudo Actulizar' })
    }
}

controllers.deleteReceptions = async (req, res) => {
    try {
        await conn.query(`DELETE FROM reception_centers WHERE reception_id=$1`, [req.params.id])
        res.status(200).json({ message: 'Centro Eliminado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Puede Eliminar, Existe informacion registrada ' })
    }
}

controllers.getStudentsReception = async (req, res) => {
    try {
        const result = await conn.query(
            `SELECT e.student_first_name,e.student_last_father_name,e.student_last_mother_name,e.student_age,r.reception_id
            FROM reception_centers r
            INNER JOIN students e ON r.reception_id=e.reception_id
            WHERE r.reception_id=$1`,
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'Error no se Pudo Obtener los datos'})
    }
}

module.exports = controllers