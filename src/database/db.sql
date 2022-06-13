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

CREATE TABLE IF NOT EXISTS testsVocational(
    testVocational_name VARCHAR(50) NOT NULL,
    testVocational_description TEXT,
    testVocational_register_date DATE NOT NULL,
    user_id INT,
    test_id SERIAL PRIMARY KEY,
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
    CONSTRAINT pk_users FOREIGN KEY (user_id) REFERENCES users(user_id)
);
CREATE TA

SELECT t.id_test, t.name_test, t.description_test,u.id_user,u.name_user,u.email_user
FROM users u
INNER JOIN tests t
ON u.id_user=t.id_user ORDER BY t.id_user;
