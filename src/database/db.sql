CREATE DATABASE IF NOT EXISTS prueba;

USE prueba;

CREATE TABLE IF NOT EXISTS users(
    user_name VARCHAR(50) NOT NULL UNIQUE,
    user_email VARCHAR(50) NOT NULL UNIQUE,
    user_password TEXT NOT NULL,
    user_repeat_password VARCHAR(50) NOT NULL,
    user_rol VARCHAR(15) NOT NULL,
    user_id SERIAL PRIMARY KEY
);
INSERT INTO users VALUES('admin','admin@gmail.com','21232f297a57a5a743894a0e4a801fc3','admin','admin');
CREATE TABLE IF NOT EXISTS reception_centers(
    reception_name VARCHAR(50) NOT NULL,
    reception_municipio VARCHAR(50) NOT NULL,
    reception_provincia VARCHAR(50) NOT NULL,
    reception_register_date DATE NOT NULL,
    user_id INT,
    reception_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TABLE IF NOT EXISTS students(
    student_first_name VARCHAR(50) NOT NULL,
    student_last_father_name VARCHAR(50) NOT NULL,
    student_last_mother_name VARCHAR(50) NOT NULL,
    student_birth_date VARCHAR(20) NOT NULL,
    student_age INT NOT NULL,
    student_sex CHAR(1) NOT NULL,
    student_ocupation VARCHAR(30) NOT NULL,
    student_ci VARCHAR(30) NOT NULL UNIQUE,
    student_grado VARCHAR(20) NOT NULL,
    user_id INT,
    reception_id INT,
    student_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_reception_centers FOREIGN KEY (reception_id) REFERENCES reception_centers(reception_id)
);

CREATE TABLE IF NOT EXISTS events(
    event_name VARCHAR(50) NOT NULL,
    event_description VARCHAR(50) NOT NULL,
    event_register_date DATE NOT NULL,
    event_status BOOLEAN NOT NULL,
    user_id INT,
    event_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS result_aptitudes(
    seccion VARCHAR(20) NOT NULL,
    pregunta1 INT NOT NULL,
    pregunta2 INT NOT NULL,
    pregunta3 INT NOT NULL,
    pregunta4 INT NOT NULL,
    pregunta5 INT NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    result_aptitud_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS result_intereses(
    seccion VARCHAR(20) NOT NULL,
    pregunta1 INT NOT NULL,
    pregunta2 INT NOT NULL,
    pregunta3 INT NOT NULL,
    pregunta4 INT NOT NULL,
    pregunta5 INT NOT NULL,
    pregunta6 INT NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    result_interes_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE IF NOT EXISTS all_results(
    user_id INT,
    student_id INT,
    event_id INT,
    all_result_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE IF NOT EXISTS test1_madurez_resultados (
    test1_madurez_nombre VARCHAR(20) NOT NULL,
    test1_madurez_factor VARCHAR(50) NOT NULL,
    test1_madurez_pregunta VARCHAR(15) NOT NULL,
    test1_madurez_respuesta CHAR(1) NOT NULL,
    test1_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test1_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE IF NOT EXISTS test2_madurez_resultados (
    test2_madurez_nombre VARCHAR(20) NOT NULL,
    test2_madurez_factor VARCHAR(50) NOT NULL,
    test2_madurez_pregunta VARCHAR(15) NOT NULL,
    test2_madurez_respuesta CHAR(1) NOT NULL,
    test2_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test2_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test3_madurez_resultados (
    test3_madurez_nombre VARCHAR(20) NOT NULL,
    test3_madurez_factor VARCHAR(50) NOT NULL,
    test3_madurez_pregunta VARCHAR(15) NOT NULL,
    test3_madurez_respuesta CHAR(1) NOT NULL,
    test3_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test3_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test4_madurez_resultados (
    test4_madurez_nombre VARCHAR(20) NOT NULL,
    test4_madurez_factor VARCHAR(50) NOT NULL,
    test4_madurez_pregunta VARCHAR(15) NOT NULL,
    test4_madurez_respuesta CHAR(1) NOT NULL,
    test4_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test4_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test5_parte1_madurez_resultados (
    test5_parte1_madurez_nombre VARCHAR(35) NOT NULL,
    test5_parte1_madurez_factor VARCHAR(50) NOT NULL,
    test5_parte1_madurez_pregunta VARCHAR(15) NOT NULL,
    test5_parte1_madurez_respuesta CHAR(2) NOT NULL,
    test5_parte1_madurez_resp_correcta CHAR(2) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test5_parte1_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test5_parte2_madurez_resultados (
    test5_parte2_madurez_nombre VARCHAR(35) NOT NULL,
    test5_parte2_madurez_factor VARCHAR(50) NOT NULL,
    test5_parte2_madurez_pregunta VARCHAR(15) NOT NULL,
    test5_parte2_madurez_respuesta CHAR(1) NOT NULL,
    test5_parte2_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test5_parte2_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test6_madurez_resultados (
    test6_madurez_nombre VARCHAR(20) NOT NULL,
    test6_madurez_factor VARCHAR(50) NOT NULL,
    test6_madurez_pregunta VARCHAR(15) NOT NULL,
    test6_madurez_respuesta CHAR(1) NOT NULL,
    test6_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test6_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);
CREATE TABLE IF NOT EXISTS test7_madurez_resultados (
    test7_madurez_nombre VARCHAR(20) NOT NULL,
    test7_madurez_factor VARCHAR(50) NOT NULL,
    test7_madurez_pregunta VARCHAR(15) NOT NULL,
    test7_madurez_respuesta CHAR(1) NOT NULL,
    test7_madurez_resp_correcta CHAR(1) NOT NULL,
    register_date DATE NOT NULL,
    user_id INT,
    student_id INT,
    event_id INT,
    test7_madurez_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
	CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
);

CREATE TABLE IF NOT EXISTS edad_mental_normas(
    puntaje INT NOT NULL,
    edad_mental INT NOT NULL,
    norma_id SERIAL PRIMARY KEY
);

INSERT INTO edad_mental_normas VALUES (10,100),
(11,101),(12,102),(13,103),(14,104),(15,105),(16,106),(17,107),(18,108),
(19,109),(20,110),(21,111),(22,113),(23,114),(24,115),(25,116),(26,117),
(27,119),(28,120),(29,122),(30,123),(31,124),(32,125),(33,126),(34,127),
(35,129),(36,130),(37,132),(38,134),(39,136),(40,137),(41,138),(42,139),
(43,140),(44,141),(45,142),(46,144),(47,146),(48,147),(49,148),(50,160),
(51,151),(52,152),(53,154),(54,154),(55,155),(56,156),(57,157),(58,158),
(59,160),(60,162),(61,163),(62,164),(63,166),(64,167),(65,168),(66,170),
(67,171),(68,172),(69,173),(70,174),(71,176),(72,178),(73,180),(74,182),
(75,184),(76,186),(77,188),(78,189),(79,190),(80,191),(81,192),(82,193),
(83,194),(84,195),(85,196),(86,197),(87,198),(88,199),(89,200),(90,201),
(91,202),(92,203),(93,204),(94,206),(95,208),(96,210),(97,211),(98,212),
(99,213),(100,214),(101,216),(102,217),(103,218),(104,219),(105,220),(106,221),
(107,222),(108,223),(109,224),(110,226),(111,227),(112,228),(113,230),(114,232),
(115,234),(116,236),(117,238),(118,240),(119,242),(120,244),(121,245),(122,246),
(123,247),(124,248),(125,250),(126,251),(127,252),(128,253),(129,254),(130,256),
(131,258),(132,260),(133,262),(134,263),(135,264),(136,266),(137,268),(138,270),
(139,271),(140,272),(141,273),(142,274),(143,276),(144,278),(145,280);



CREATE TABLE IF NOT EXISTS baremo_primero(
    data_pc INT NOT NULL,
    data_re INT NOT NULL,
    data_rl INT NOT NULL,
    data_rn INT NOT NULL,
    data_cv INT NOT NULL,
    baremo_primero_id SERIAL PRIMARY KEY
);
CREATE TABLE IF NOT EXISTS baremo_segundo(
    data_pc INT NOT NULL,
    data_re INT NOT NULL,
    data_rl INT NOT NULL,
    data_rn INT NOT NULL,
    data_cv INT NOT NULL,
    baremo_segundo_id SERIAL PRIMARY KEY
);

INSERT INTO baremo_primero VALUES (95,28,19,19,35),
(90,26,17,14,34),
(75,23,14,12,30),
(50,19,11,10,24),
(25,15,8,8,19),
(10,11,5,4,16),
(5,9,4,2,8);

INSERT INTO baremo_segundo VALUES (95,28,24,22,42),
(90,26,23,20,39),
(75,24,19,16,35),
(50,20,17,11,30),
(25,15,14,8,25),
(10,11,10,6,20),
(5,9,7,5,17);

CREATE TABLE IF NOT EXISTS rendimiento_conversiones(
    data_pc_min INT NOT NULL,
    data_pc_max INT NOT NULL,
    data_rendimiento VARCHAR(20) NOT NULL,
    rendimiento_id SERIAL PRIMARY KEY
);
INSERT INTO rendimiento_conversiones VALUES (90,100,'Superior'),
(75,89,'Normal-Superior'),
(50,74,'Normal'),
(25,49,'Normal-Inferior'),
(0,24,'Inferior');


CREATE TABLE IF NOT EXISTS archivos(
    archivo_nombre VARCHAR(50) NOT NULL,
    archivo_grado VARCHAR(50) NOT NULL,
    archivo_contenido TEXT NOT NULL,
    archivo_description VARCHAR(100) NOT NULL,
    archivo_register_date DATE NOT NULL,
    archivo_id SERIAL PRIMARY KEY 
);
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------
------------------------------------------------------------------------------------

-- CREATE TABLE IF NOT EXISTS tests_madures_mental(
--     test_madures_name VARCHAR(50) NOT NULL,
--     test_madures_description TEXT,
--     test_madures_register_date DATE NOT NULL,
--     test_madures_status BOOLEAN NOT NULL,
--     user_id INT,
--     event_id INT,
--     test_madures_id SERIAL PRIMARY KEY,
--     CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
--     CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)

-- );

-- CREATE TABLE IF NOT EXISTS tests_aptitudes(
--     test_aptitud_name VARCHAR(50) NOT NULL,
--     test_aptitud_description TEXT,
--     test_aptitud_register_date DATE NOT NULL,
--     test_aptitud_status BOOLEAN NOT NULL,
--     user_id INT,
--     event_id INT,
--     test_aptitud_id SERIAL PRIMARY KEY,
--     CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
--     CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
-- );

-- CREATE TABLE IF NOT EXISTS tests_intereses(
--     test_interes_name VARCHAR(50) NOT NULL,
--     test_interes_description TEXT,
--     test_interes_register_date DATE NOT NULL,
--     test_interes_status BOOLEAN NOT NULL,
--     user_id INT,
--     event_id INT,
--     test_interes_id SERIAL PRIMARY KEY,
--     CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
--     CONSTRAINT pk_events FOREIGN KEY (event_id) REFERENCES events(event_id)
-- );



-- CREATE TABLE IF NOT EXISTS result_test_aptitudes(
--     pregunta1 INT NOT NULL,
--     pregunta2 INT NOT NULL,
--     pregunta3 INT NOT NULL,
--     pregunta4 INT NOT NULL,
--     pregunta5 INT NOT NULL,
--     seccion VARCHAR(20) NOT NULL,
--     register_date DATE NOT NULL,
--     user_id INT,
--     student_id INT,
-- 	test_aptitud_id INT,
--     result_test_aptitudes_id SERIAL PRIMARY KEY,
--     CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id),
--     CONSTRAINT pk_students FOREIGN KEY (student_id) REFERENCES students(student_id),
-- 	CONSTRAINT pk_tests_aptitudes FOREIGN KEY (test_aptitud_id) REFERENCES tests_aptitudes(test_aptitud_id)
-- );

-- INSERT INTO users VALUES('admin','admin@gmail.com','21232f297a57a5a743894a0e4a801fc3','admin','admin');
-- --------------------------------------------------------------------------------

-- --------------------------------------------------------------------------------
-- --------------------------------------------------------------------------------
-- CREATE TABLE IF NOT EXISTS results(
--     result_name VARCHAR(50) NOT NULL,
--     result_description TEXT,
--     result_register_date DATE NOT NULL,
--     user_id INT,
--     test_id INT,
--     result_id SERIAL PRIMARY KEY,
--     CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
--     CONSTRAINT pk_tests FOREIGN KEY (test_id) REFERENCES tests(test_id)
-- );

-- CREATE TABLE IF NOT EXISTS register_test_analitico_estudiantes(
    
-- )
-- CREATE TABLE IF NOT EXISTS register_test_grafico_estudiantes(
    
-- )
-- CREATE TABLE IF NOT EXISTS register_test_matematico_estudiantes(
    
-- )


-- CREATE TABLE IF NOT EXISTS register_test_intereses_estudiantes(
    
-- )








-- SELECT t.id_test, t.name_test, t.description_test,u.id_user,u.name_user,u.email_user
-- FROM users u
-- INNER JOIN tests t ON u.id_user=t.id_user ORDER BY t.id_user;

-- -------------------------------------------------------------------
-- SELECT est.student_first_name,est.student_last_name, u.user_email,t.seccion,t.pregunta1,t.pregunta2,t.pregunta3
-- FROM users u
-- INNER JOIN result_test_aptitudes t ON t.user_id=u.user_id
-- INNER JOIN students est ON t.student_id=est.student_id

-- ----------------------------------------------------------------------
-- SELECT DISTINCT s.student_first_name,s.student_last_name,s.student_id,t.test_aptitud_id,
-- FROM result_test_aptitudes t
-- INNER JOIN students s ON s.student_id=t.student_id