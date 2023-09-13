const mysql = require('mysql2');

<<<<<<< HEAD
const pool = mysql.createPool({
=======
const pool = mysql.createPool ({
>>>>>>> lab17
    host: 'localhost',
    user: 'root',
    database: 'lovebikes',
    password: ''
});

module.exports = pool.promise();