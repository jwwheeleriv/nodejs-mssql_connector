/* ***********************************************************************************************
 * Author:  Jay Wheeler (gh@jwiv.com)
 * Date:    08/27/2019
 * Desc:    Test controller to see how we connect, query and return results
 * *****************************************************************************************/


const express = require('express');

const db = require('../connnectors/mssql-connector');

//Make connection to the DB Pool
const dbConnPool =  db.dbConnectionPool.connect(
    poolConn => { 
        return poolConn 
    }, 
    err => {
        //@TODO: Add logger response here
        console.log('Login controller - SQL Connection Error', err);
        return undefined;
        
    }
);

const testSQL = async (req, resp) => {
    try {
        if(dbConnPool !== undefined){
            
            await dbConnPool.request().execute('common.usp_hello_world', (err, results) => {
                
                if(err){
                    return resp.status(500).json({
                        CALL_STATUS: 'FAILURE', 
                        CALL_STATUS_MSG: `SQL Procedure Error: ${err}`
                    });
                }
                
                return resp.status(200).json({
                    CALL_STATUS: 'SUCCESS', 
                    CALL_STATUS_MSG: "", 
                    PAYLOAD: JSON.stringify(results.recordsets)
                }); 
               
            }); 
        } else {
            //@TODO: Add logger response here
            console.log('Login controller - SQL Connection Error', dbConnPool);
            resp.status(500).json({
                CALL_STATUS: 'FAILURE', 
                CALL_STATUS_MSG: "Error connecting to database"
            });
        }
    } catch (error) {
        resp.status(500).json({
            CALL_STATUS: 'FAILURE', 
            CALL_STATUS_MSG: 'Generic Error: ' + error
        });
    }

}

module.exports = { testSQL }