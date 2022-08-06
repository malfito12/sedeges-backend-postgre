const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()

controllers.getStudents = (async (req, res) => {
    try {
        const result = await conn.query('SELECT * FROM students')
        res.status(200).json(result.rows)
    } catch (error) {
        console.log(error)
        res.status(300)
    }
})

controllers.getStudent = async (req, res) => {
    // console.log(req.params.id)
    try {
        const result = await conn.query(
            `SELECT 
            student_first_name,
            student_last_father_name,
            student_last_mother_name,
            student_birth_date,
            student_age,
            student_sex,
            student_ocupation,
            student_institution_name,
            student_ci,
            student_id
            FROM students WHERE student_ci=$1`,
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
            'INSERT INTO students VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)',
            [params.firstName, params.lastNameFather,params.lastNameMother, params.birthDate, params.age, params.sex, params.ocupation,params.nameInstitution, params.ci]
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
            'UPDATE students SET student_first_name=$1, student_last_name=$2,student_birth_date=$3,student_age=$4,student_sex=5,student_ocupation=$6,student_ci=$7 WHERE student_id=$8',
            [params.fisrtName, params.lastName, params.birthDate, params.age, params.sex, params.ocupation, params.ci, req.params.id]
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
        res.status(300).json({ message: 'error en la base de datos' })
    }
}

module.exports = controllers