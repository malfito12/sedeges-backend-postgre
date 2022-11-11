const controllers = {}
const dbConnection = require('../database/dbConnections')
const conn = dbConnection()
var moment = require('moment')

controllers.post_result_test1 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test1_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
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
                `INSERT INTO test2_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test3 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test3_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test4 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test4_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test5_parte1 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test5_parte1_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test5_parte2 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test5_parte2_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test6 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test6_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}
controllers.post_result_test7 = async (req, res) => {
    const params = req.body
    // console.log(params)
    try {
        for (var i = 0; i < params.length; i++) {
            await conn.query(
                `INSERT INTO test7_madurez_resultados VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
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
        const result = await conn.query(
            `SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,
            [params[0].student_id, params[0].event_id]
        )
        if (result.rows.length === 0) {
            await conn.query(
                `INSERT INTO all_results VALUES ($1,$2,$3,$4)`,
                [params[0].user_id,params[0].student_id,params[0].event_id,new Date()]
            )
        }
        res.status(200).json({ message: 'Datos Registrados' })
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}

//---------------MOSTRAR RESULTADOS----------------------

controllers.getResultsMadurezStudent = async (req, res) => {
    var student_id = req.query.student_id
    var event_id = req.query.event_id
    var sumTotal = 0
    var array = [{
        datos_estudiante: {
            nombre: '',
            apellidoP: '',
            apellidoM: '',
            edad: '',
            fecha_nacimiento: '',
        },
        datos_test: {
            test1: '',
            test2: '',
            test3: '',
            test4: '',
            test5: '',
            test6: '',
            test7: '',
            relaciones_espaciales: '',
            razonamiento_logico: '',
            razonamiento_numerico: '',
            conceptos_verbales: '',
            total: '',
            edad_cronologica: '',
            edad_mental: '',
            coeficiente_intelectual: ''
        },
        datos_pc_nivel: {
            pc_re: '',
            nivel_re: '',
            pc_rl: '',
            nivel_rl: '',
            pc_rn: '',
            nivel_rn: '',
            pc_cv: '',
            nivel_cv: '',
            pc_total: '',
            nivel_total: '',
        },
        datos_opcionales:{
            edad_nacimiento_est:'',
            edad_nacimiento_meses_est:'',
            edad_register_test_est:'',
            edad_mental_sum:'',
        }
    }]
    try {
        const datos = await conn.query(`SELECT * FROM students WHERE student_id=$1`, [student_id])
        const fecharegistro=await conn.query(`SELECT * FROM all_results WHERE student_id=$1 AND event_id=$2`,[student_id,event_id])
        var edadCronologica = 0
        var grado_student = ''
        if (datos.rows.length > 0 && fecharegistro.rows.length>0) {
            array[0].datos_estudiante.nombre = datos.rows[0].student_first_name
            array[0].datos_estudiante.apellidoP = datos.rows[0].student_last_father_name
            array[0].datos_estudiante.apellidoM = datos.rows[0].student_last_mother_name
            array[0].datos_estudiante.edad = datos.rows[0].student_age
            array[0].datos_estudiante.fecha_nacimiento = datos.rows[0].student_birth_date
            edadCronologica = datos.rows[0].student_birth_date
            var a = moment(edadCronologica, 'DD-MM-YYYY')
            var fecha_test=moment(fecharegistro.rows[0].register_date)
            // var b = moment()
            var c = fecha_test.diff(a, 'months')
            array[0].datos_test.edad_cronologica = c
            //------datos opcionales-----------
            array[0].datos_opcionales.edad_nacimiento_meses_est = c
            array[0].datos_opcionales.edad_register_test_est =  moment(fecha_test,'DD-MM-YYYY').format('DD-MM-YYYY')
            array[0].datos_opcionales.edad_nacimiento_est = moment(a,'DD-MM-YYYY').format('DD-MM-YYYY')
            //-------------------
            edadCronologica = c
            grado_student = datos.rows[0].student_grado
        }
        const test1 = await conn.query(
            `SELECT t.test1_madurez_nombre,t.test1_madurez_factor,t.test1_madurez_pregunta,t.test1_madurez_respuesta,t.test1_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test1_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        const test2 = await conn.query(
            `SELECT t.test2_madurez_nombre,t.test2_madurez_factor,t.test2_madurez_pregunta,t.test2_madurez_respuesta,t.test2_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test2_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        if (test1.rows.length > 0 && test2.rows.length > 0) {
            var sum1 = 0
            var sum2 = 0
            for (var i = 0; i < test1.rows.length; i++) {
                if (test1.rows[i].test1_madurez_respuesta === test1.rows[i].test1_madurez_resp_correcta) {
                    sum1 = sum1 + 4
                }
            }
            for (var i = 0; i < test2.rows.length; i++) {
                if (test2.rows[i].test2_madurez_respuesta === test2.rows[i].test2_madurez_resp_correcta) {
                    sum2 = sum2 + 3
                }
            }
            array[0].datos_test.test1 = sum1
            array[0].datos_test.test2 = sum2
            array[0].datos_test.relaciones_espaciales = sum1 + sum2
            sumTotal = sumTotal + sum1 + sum2

        }
        const test3 = await conn.query(
            `SELECT t.test3_madurez_nombre,t.test3_madurez_factor,t.test3_madurez_pregunta,t.test3_madurez_respuesta,t.test3_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test3_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        const test4 = await conn.query(
            `SELECT t.test4_madurez_nombre,t.test4_madurez_factor,t.test4_madurez_pregunta,t.test4_madurez_respuesta,t.test4_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test4_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        if (test3.rows.length > 0 && test4.rows.length > 0) {
            var sum1 = 0
            var sum2 = 0
            for (var i = 0; i < test3.rows.length; i++) {
                if (test3.rows[i].test3_madurez_respuesta === test3.rows[i].test3_madurez_resp_correcta) {
                    sum1 = sum1 + 3
                }
            }
            for (var i = 0; i < test4.rows.length; i++) {
                if (test4.rows[i].test4_madurez_respuesta === test4.rows[i].test4_madurez_resp_correcta) {
                    sum2 = sum2 + 3
                }
            }
            array[0].datos_test.test3 = sum1
            array[0].datos_test.test4 = sum2
            array[0].datos_test.razonamiento_logico = sum1 + sum2
            sumTotal = sumTotal + sum1 + sum2
        }
        const test5_parte1 = await conn.query(
            `SELECT t.test5_parte1_madurez_nombre,t.test5_parte1_madurez_factor,t.test5_parte1_madurez_pregunta,t.test5_parte1_madurez_respuesta,t.test5_parte1_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test5_parte1_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        const test5_parte2 = await conn.query(
            `SELECT t.test5_parte2_madurez_nombre,t.test5_parte2_madurez_factor,t.test5_parte2_madurez_pregunta,t.test5_parte2_madurez_respuesta,t.test5_parte2_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test5_parte2_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )

        const test6 = await conn.query(
            `SELECT t.test6_madurez_nombre,t.test6_madurez_factor,t.test6_madurez_pregunta,t.test6_madurez_respuesta,t.test6_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test6_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        if (test5_parte1.rows.length > 0 && test5_parte2.rows.length > 0 && test6.rows.length > 0) {
            var sum1 = 0
            var sum2 = 0
            var sum3 = 0
            for (var i = 0; i < test5_parte1.rows.length; i++) {
                if (test5_parte1.rows[i].test5_parte1_madurez_respuesta === test5_parte1.rows[i].test5_parte1_madurez_resp_correcta) {
                    sum1 = sum1 + 2
                }
            }
            for (var i = 0; i < test5_parte2.rows.length; i++) {
                if (test5_parte2.rows[i].test5_parte2_madurez_respuesta === test5_parte2.rows[i].test5_parte2_madurez_resp_correcta) {
                    sum2 = sum2 + 1
                }
            }
            for (var i = 0; i < test6.rows.length; i++) {
                if (test6.rows[i].test6_madurez_respuesta === test6.rows[i].test6_madurez_resp_correcta) {
                    sum3 = sum3 + 3
                }
            }
            array[0].datos_test.test5 = sum1 + sum2
            array[0].datos_test.test6 = sum3
            array[0].datos_test.razonamiento_numerico = sum1 + sum2 + sum3
            sumTotal = sumTotal + sum1 + sum2 + sum3
        }
        const test7 = await conn.query(
            `SELECT t.test7_madurez_nombre,t.test7_madurez_factor,t.test7_madurez_pregunta,t.test7_madurez_respuesta,t.test7_madurez_resp_correcta,s.student_first_name,s.student_last_father_name,s.student_last_mother_name,s.student_birth_date,s.student_age
            FROM test7_madurez_resultados t
            INNER JOIN students s ON s.student_id=t.student_id
            WHERE s.student_id=$1 AND t.event_id=$2`,
            [student_id, event_id]
        )
        if (test7.rows.length > 0) {
            var sum = 0
            for (var i = 0; i < test7.rows.length; i++) {
                if (test7.rows[i].test7_madurez_respuesta === test7.rows[i].test7_madurez_resp_correcta) {
                    sum = sum + 5
                }
            }
            array[0].datos_test.test7 = sum
            array[0].datos_test.conceptos_verbales = sum
            sumTotal = sumTotal + sum
        }
        array[0].datos_test.total = sumTotal
        array[0].datos_opcionales.edad_mental_sum = sumTotal
        // EDAD CREONOLOGICA ---- EDAD MENTAL ----- COEFICIENTE INTELECTUAL
        if(test1.rows.length>0&&test2.rows.length>0&&test3.rows.length>0&&test4.rows.length>0&&test5_parte1.rows.length>0&&test5_parte2.rows.length>0&&test6.rows.length>0&&test7.rows.length>0){
            const edad_mental = await conn.query(`SELECT * FROM edad_mental_normas WHERE puntaje=$1`, [sumTotal])
            if (edad_mental.rows.length>0) {
                array[0].datos_test.edad_mental = edad_mental.rows[0].edad_mental
                var coeficiente = (parseInt(edad_mental.rows[0].edad_mental) / parseInt(edadCronologica)) * 100
                array[0].datos_test.coeficiente_intelectual = coeficiente.toFixed(7)
            }
            //-----------------BAREMOS FACTOR GRUPAL--------------------------
            if (datos) {
                if (grado_student == 'Primer Grado' || grado_student == 'Segundo Grado' || grado_student == 'Tercer Grado') {
                    const result = await conn.query(`SELECT * FROM baremo_primero`)
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.relaciones_espaciales >= parseInt(result.rows[i].data_re)) {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.relaciones_espaciales > parseInt(result.rows[i].data_re) && array[0].datos_test.relaciones_espaciales <= parseInt(result.rows[i - 1].data_re)) {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.razonamiento_logico >= parseInt(result.rows[i].data_rl)) {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.razonamiento_logico > parseInt(result.rows[i].data_rl) && array[0].datos_test.razonamiento_logico <= parseInt(result.rows[i - 1].data_rl)) {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.razonamiento_numerico >= parseInt(result.rows[i].data_rn)) {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.razonamiento_numerico > parseInt(result.rows[i].data_rn) && array[0].datos_test.razonamiento_numerico <= parseInt(result.rows[i - 1].data_rn)) {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.conceptos_verbales >= parseInt(result.rows[i].data_cv)) {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.conceptos_verbales > parseInt(result.rows[i].data_cv) && array[0].datos_test.conceptos_verbales <= parseInt(result.rows[i - 1].data_cv)) {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i - 1].data_pc)
                                break
                            } else {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
    
                } else {
                    const result = await conn.query(`SELECT * FROM baremo_segundo`)
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.relaciones_espaciales >= parseInt(result.rows[i].data_re)) {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.relaciones_espaciales > parseInt(result.rows[i].data_re) && array[0].datos_test.relaciones_espaciales <= parseInt(result.rows[i - 1].data_re)) {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_re = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.razonamiento_logico >= parseInt(result.rows[i].data_rl)) {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.razonamiento_logico > parseInt(result.rows[i].data_rl) && array[0].datos_test.razonamiento_logico <= parseInt(result.rows[i - 1].data_rl)) {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_rl = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.razonamiento_numerico >= parseInt(result.rows[i].data_rn)) {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.razonamiento_numerico > parseInt(result.rows[i].data_rn) && array[0].datos_test.razonamiento_numerico <= parseInt(result.rows[i - 1].data_rn)) {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i - 1].data_pc)
                                break
                            }
                            else {
                                array[0].datos_pc_nivel.pc_rn = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                    for (var i = 0; i < result.rows.length; i++) {
                        if (i == 1) {
                            if (array[0].datos_test.conceptos_verbales >= parseInt(result.rows[i].data_cv)) {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i].data_pc)
                                break
                            }
                        } else {
                            if (array[0].datos_test.conceptos_verbales > parseInt(result.rows[i].data_cv) && array[0].datos_test.conceptos_verbales <= parseInt(result.rows[i - 1].data_cv)) {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i - 1].data_pc)
                                break
                            } else {
                                array[0].datos_pc_nivel.pc_cv = parseInt(result.rows[i].data_pc)
                            }
                        }
                    }
                }
            }
            //----------CONVERSIONES------------
            const conversion = await conn.query(`SELECT * FROM rendimiento_conversiones`)
            if (conversion) {
                for (var i = 0; i < conversion.rows.length; i++) {
                    var min = parseInt(conversion.rows[i].data_pc_min)
                    var max = parseInt(conversion.rows[i].data_pc_max)
                    if (array[0].datos_pc_nivel.pc_re >= min && array[0].datos_pc_nivel.pc_re <= max) {
                        array[0].datos_pc_nivel.nivel_re = conversion.rows[i].data_rendimiento
                        break
                    }
                }
                for (var i = 0; i < conversion.rows.length; i++) {
                    var min = parseInt(conversion.rows[i].data_pc_min)
                    var max = parseInt(conversion.rows[i].data_pc_max)
                    if (array[0].datos_pc_nivel.pc_rl >= min && array[0].datos_pc_nivel.pc_rl <= max) {
                        array[0].datos_pc_nivel.nivel_rl = conversion.rows[i].data_rendimiento
                        break
                    }
                }
                for (var i = 0; i < conversion.rows.length; i++) {
                    var min = parseInt(conversion.rows[i].data_pc_min)
                    var max = parseInt(conversion.rows[i].data_pc_max)
                    if (array[0].datos_pc_nivel.pc_rn >= min && array[0].datos_pc_nivel.pc_rn <= max) {
                        array[0].datos_pc_nivel.nivel_rn = conversion.rows[i].data_rendimiento
                        break
                    }
                }
                for (var i = 0; i < conversion.rows.length; i++) {
                    var min = parseInt(conversion.rows[i].data_pc_min)
                    var max = parseInt(conversion.rows[i].data_pc_max)
                    if (array[0].datos_pc_nivel.pc_cv >= min && array[0].datos_pc_nivel.pc_cv <= max) {
                        array[0].datos_pc_nivel.nivel_cv = conversion.rows[i].data_rendimiento
                        break
                    }
                }
            }
            // console.log(array)
            res.status(200).json(array)
        }else{
            res.status(200).json([])
        }
    } catch (error) {
        console.log(error)
        res.status(300).json({ message: 'Error en la base de datos' })
    }
}

module.exports = controllers