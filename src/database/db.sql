CREATE DATABASE IF NOT EXISTS prueba;

USE prueba;

CREATE TABLE IF NOT EXISTS users(
    user_name VARCHAR(50) NOT NULL,
    user_email VARCHAR(50) NOT NULL,
    user_password TEXT NOT NULL,
    user_repeat_password VARCHAR(50) NOT NULL,
    user_rol VARCHAR(15) NOT NULL,
    user_id SERIAL PRIMARY KEY
);

CREATE TABLE IF NOT EXISTS tests(
    test_name VARCHAR(50) NOT NULL,
    test_description TEXT,
    test_register_date DATE NOT NULL,
    test_status BOOLEAN NOT NULL,
    user_id INT,
    test_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS tests_aptitudes(
    test_aptitud_name VARCHAR(50) NOT NULL,
    test_aptitud_description TEXT,
    test_aptitud_register_date DATE NOT NULL,
    test_aptitud_status BOOLEAN NOT NULL,
    user_id INT,
    test_aptitud_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE IF NOT EXISTS tests_intereses(
    test_interes_name VARCHAR(50) NOT NULL,
    test_interes_description TEXT,
    test_interes_register_date DATE NOT NULL,
    test_interes_status BOOLEAN NOT NULL,
    user_id INT,
    test_interes_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);

--------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS students(
    student_first_name VARCHAR(50) NOT NULL,
    student_last_name VARCHAR(50) NOT NULL,
    student_birth_date VARCHAR(20) NOT NULL,
    student_age INT NOT NULL,
    student_sex CHAR(1) NOT NULL,
    student_ocupation VARCHAR(30) NOT NULL,
    student_ci VARCHAR(30) NOT NULL,
    student_id SERIAL PRIMARY KEY
);
--------------------------------------------------------------------------------
--------------------------------------------------------------------------------
CREATE TABLE IF NOT EXISTS results(
    result_name VARCHAR(50) NOT NULL,
    result_description TEXT,
    result_register_date DATE NOT NULL,
    user_id INT,
    test_id INT,
    result_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
    CONSTRAINT pk_tests FOREIGN KEY (test_id) REFERENCES tests(test_id)
);

CREATE TABLE IF NOT EXISTS register_test_analitico_estudiantes(
    
)
CREATE TABLE IF NOT EXISTS register_test_grafico_estudiantes(
    
)
CREATE TABLE IF NOT EXISTS register_test_matematico_estudiantes(
    
)
CREATE TABLE IF NOT EXISTS register_test_aptitudes_estudiantes(
    
)
CREATE TABLE IF NOT EXISTS register_test_intereses_estudiantes(
    
)



INSERT INTO users VALUES('admin','admin@gmail.com','21232f297a57a5a743894a0e4a801fc3','admin','admin')



SELECT t.id_test, t.name_test, t.description_test,u.id_user,u.name_user,u.email_user
FROM users u
INNER JOIN tests t
ON u.id_user=t.id_user ORDER BY t.id_user;
