const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.getArchivos = async (req, res) => {
    // console.log('entra')
    try {
        const result = await conn.query('SELECT * FROM archivos')
        // console.log(result.rows)
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300)
    }
}
controllers.postArchivos = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        await conn.query(
            `INSERT INTO archivos VALUES ($1,$2,$3,$4,$5)`,
            [
                params.archivo_nombre, 
                params.archivo_grado, 
                params.archivo_contenido,
                params.archivo_description,
                new Date()
            ])
        // console.log(result.rows)
        res.status(200).json({ message: 'archivo registrado' })
    } catch (error) {
        console.log(error)
        res.status(300)
    }
}
controllers.deleteArchivo = async (req, res) => {
    const params = req.params.id
    // console.log(params)
    try {
        await conn.query(`DELETE FROM archivos WHERE archivo_id=$1`,[params])
        res.status(200).json({ message: 'Archivo Eliminado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error, No se Puedo Eliminar el Archivo' })
    }
}

module.exports = controllers