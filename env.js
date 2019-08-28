/* *****************************************************************************************
 * Author:  Jay Wheeler (gh@jwiv.com)
 * Date:    08/27/2019
 * Desc:    Environment Variables Module setup
 * *****************************************************************************************/

const fs = require('fs');
const path = require('path');

const exportEnvVars = () => {
    process.env.MSSQLPASS = fs.readFileSync(path.resolve(process.cwd(), './configs/secrets/mssql.secret'), 'ascii');
}

module.exports = { exportEnvVars };