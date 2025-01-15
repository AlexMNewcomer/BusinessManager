import express from 'express';
import { queryResult } from 'pg';
import { pool, connectToDb } from './connections.js';

await connectToDb();

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Create an employee
app.post('/api/new-employee', ({ body }, res) => {
    const { first_name, last_name, role, department } = body;
    pool.query(
        'INSERT INTO employees (first_name, last_name, role, department) VALUES ($1, $2, $3, $4) RETURNING *',
        [first_name, last_name, role, department],
        (error, results) => {
        if (error) {
            throw error;
        }
        res.status(201).json(results.rows);
        }
    );
});

//Read all employees
app.get('/api/employees', (req, res) => {
    pool.query('SELECT * FROM employees', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

//Read all departments
app.get('/api/departments', (req, res) => {
    pool.query('SELECT * FROM departments', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

//Read all roles
app.get('/api/roles', (req, res) => {
    pool.query('SELECT * FROM roles', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

//Read employees by department
app.get('/api/employees/:department', (req, res) => {
    const department = req.params.department;
    pool.query('SELECT * FROM employees WHERE department = $1', [department], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
});

//Update an employee
app.put('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    const { first_name, last_name, role, department }
    = req.body;

    pool.query(
        'UPDATE employees SET first_name = $1, last_name = $2, role = $3, department = $4 WHERE id = $5 RETURNING *',
        [first_name, last_name, role, department, id],
        (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
        }
    );
});

//Delete an employee
app.delete('/api/employee/:id', (req, res) => {
    const id = req.params.id;
    pool.query('DELETE FROM employees WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`User deleted with ID: ${id}`);
    });
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

