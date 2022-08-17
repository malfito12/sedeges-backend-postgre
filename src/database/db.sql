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
CREATE TABLE IF NOT EXISTS students(
    student_first_name VARCHAR(50) NOT NULL,
    student_last_father_name VARCHAR(50) NOT NULL,
    student_last_mother_name VARCHAR(50) NOT NULL,
    student_birth_date VARCHAR(20) NOT NULL,
    student_age INT NOT NULL,
    student_sex CHAR(1) NOT NULL,
    student_ocupation VARCHAR(30) NOT NULL,
    student_institution_name VARCHAR(30) NOT NULL,
    student_ci VARCHAR(30) NOT NULL UNIQUE,
    user_id INT,
    student_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
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
)

-- CREATE TABLE IF NOT EXISTS results_madures(
--     result_name VARCHAR(50) NOT NULL,
    
-- )


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