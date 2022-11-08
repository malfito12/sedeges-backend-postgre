const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.getStudents = async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM students')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300)
    }
}

controllers.getStudent = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await conn.query(
            `SELECT * FROM students WHERE student_ci=$1`,
            [req.params.id]
        )
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300).json({message:'error en la base de datos'})
    }
}
controllers.postStudent = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        await conn.query(
            'INSERT INTO students VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)',
            [params.firstName, params.lastNameFather,params.lastNameMother, params.birthDate, params.age, params.sex, params.ocupation, params.ci,params.grado,params.user_id,params.reception_id]
        )
        res.status(200).json({ message: 'estudiante registrado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

controllers.updateStudent = async (req, res) => {
    const params = req.body
    try {
        await conn.query(
            `UPDATE students SET 
            student_first_name=$1, 
            student_last_father_name=$2,
            student_last_mother_name=$3,
            student_birth_date=$4,
            student_age=$5,
            student_sex=$6,
            student_ocupation=$7,
            student_ci=$8,
            student_grado=$9 
            WHERE student_id=$10`,
            [
                params.student_first_name,
                params.student_last_father_name,
                params.student_last_mother_name,
                params.student_birth_date, 
                params.student_age, 
                params.student_sex, 
                params.student_ocupation, 
                params.student_ci, 
                params.student_grado, 
                req.params.id
            ]
        )
        res.status(200).json({ message: 'Estudiante Actualizado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'error en la base de datos' })
    }
}
controllers.deleteStudent = async (req, res) => {
    try {
        await conn.query('DELETE FROM students WHERE student_id=$1',
            [req.params.id]
        )
        res.status(200).json({ message: 'Estudiante eliminado' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error no se pudo eliminar, la informacion todavia es referida del modulo resultados' })
    }
}

module.exports = controllers