INSERT INTO department (department_name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal'),
       ('HR');

INSERT INTO role (role_name, department_name)
VALUES ('Sales Lead', 1),
       ('Salesperson', 1),
       ('Lead Engineer', 2),
       ('Software Engineer', 2),
       ('Accountant', 3),
       ('Legal Team Lead', 4),
       ('Lawyer', 4),
       ('HR Lead', 5),
       ('HR Assistant', 5);

INSERT INTO employees (employee_name, role_name)
VALUES ('John Doe', 1),
       ('Mike Jones', 2),
       ('Jane Smith', 3),
       ('Jill Brown', 4),
       ('Aaron Rodgers', 5),
       ('Jimmy Johnson', 6),
       ('Harvey Specter', 7),
       ('Jessica Pearson', 8),
       ('Rachel Zane', 9);