const mysql = require("promise-mysql");
module.exports = async (id) => {
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "password",
        database: "FLM"
    });
    let result = await connection.query({
        sql: "SELECT * FROM Employees;",
        timeout: 1000
    });
    for (let emp of result) {
        console.log(emp);
    }
};