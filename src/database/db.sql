CREATE DATABASE IF NOT EXISTS reactNative_tasks;

USE reactNative_tasks;

CREATE TABLE IF NOT EXISTS tasks(
    id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id)
);

INSERT INTO tasks (title,description) VALUES
    ('tasks 1','some description 1'),
    ('tasks 2','some description 2');