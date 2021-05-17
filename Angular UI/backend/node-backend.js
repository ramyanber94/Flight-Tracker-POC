const express = require('express');
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test2'
})

db.connect(err => {
    if (err) {
        throw err;
    }
    console.log('mysql connected')
})

const app = express();

app.get('/createdb', (req, res) => {
    let sql = 'Create database test2'
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Database Created')
    })
});
app.get('/createEmployee', (req, res) => {
    let sql = 'CREATE TABLE Employee ( ID int, name varchar(50))'
    db.query(sql, err => {
        if (err) {
            throw err;
        }
        res.send('Table is created')
    })
})
app.get('/getData', (req, res) => {
    res.json({
        "statusCode": 200,
        "statusMessage": "SUCCESS"
    })
})
app.get('/employee1', (req, res) => {
    let post = { ID: req.query.id, name: req.query.name }
    let sql = 'Insert into employee set ?';
    db.query(sql, post, err => {
        if (err) {
            throw err;
        }
        res.send('{"msg":"Employee has inserted"}');
    })
})

app.get('/getEmployee', (req, res) => {
    let sql = 'select * from employee'
    db.query(sql, (err, result) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
        }
        console.log(result);
        res.send('Employee details has been fetched');
    })

})
app.listen('3000', () => {
    console.log('server started on port 3000')
})