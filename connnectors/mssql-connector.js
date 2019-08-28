/* ***********************************************************************************************
 * Author:  Jay Wheeler (gh@jwiv.com)
 * Date:    08/27/2019
 * Desc:    Microsoft SQL Server Connection Pool Setup
 * *****************************************************************************************/

const sql = require("mssql"); //importing mssql module
console.log('MSSQLPASS', process.env.MSSQLPASS);  

const pwd = new Buffer.from(process.env.MSSQLPASS, 'base64').toString('ascii').trim(); //Convert password back to plain text from base64

let dbConnectionPool = {};

// db config 
var config = {
    user: 'sa',
    password: pwd,
    server: 'localhost', 
    database: 'myDatabaseName',
    pool: {
      min: 0,
      max: 100,
      idleTimeoutMillis: 30000
    }
};

try {

  //Attempt to connect to database pool
  dbConnectionPool = new sql.ConnectionPool(config);

  dbConnectionPool.on('error', err => {
    console.log('Connection Error', err);
  })

} catch(e) {
  console.log('GENERIC Connection Pool Error', e);
}
  
module.exports = { dbConnectionPool, sql }