
const mysql = require('mysql');
const { promisify } = require('util');

// MySQL connection configuration
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'malvika',
});

// Convert MySQL query functions to promises
const queryAsync = promisify(connection.query).bind(connection);

// Connect to the database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err.message);
    return;
  }
  console.log('Connected to the database.');

  // Insert a record into the employee table
  const employee = {
    name: 'John Doe',
    designation: 'Software Engineer',
    salary: 50000,
  };

  const insertQuery = 'INSERT INTO employee SET ?';

  queryAsync(insertQuery, employee)
    .then((result) => {
      console.log('New employee record inserted successfully.');
      console.log('Inserted ID:', result.insertId);
      return queryAsync('SELECT * FROM employee');
    })
    .then((rows) => {
      console.log('All records in employee table:');
      console.table(rows);
      connection.end();
    })
    .catch((err) => {
      console.error('Error executing the query:', err.message);
      connection.end();
    });
});
