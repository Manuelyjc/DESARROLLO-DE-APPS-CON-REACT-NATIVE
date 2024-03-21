const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: 'manuelq12345',
    database: 'nodejs_base1',
    authPlugins : {
        mysql_clear_password: () => Buffer.from('P4$$w0rd¡}', 'utf-8'),
        caching_sh2_password : true,
    }
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log('Conectado a la base de datos MySQL');
});

module.exports = db;
