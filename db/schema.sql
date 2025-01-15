DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

\c business_db;

CREATE TABLE department_name (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL
   department_name INTEGER,
  FOREIGN KEY (department_name)
  REFERENCES department_name(id)
  ON DELETE SET NULL
);

CREATE TABLE employees (
  id SERIAL PRIMARY KEY,
  name VARCHAR(30) NOT NULL,
  role_name INTEGER,
  FOREIGN KEY (role_name)
  REFERENCES role_name(id)
  ON DELETE SET NULL
);