/* ***********************************************************************************************
 * Author:  Jay Wheeler (gh@jwiv.com)
 * Date:    08/27/2019
 * Desc:    Test Route(s)
 * *****************************************************************************************/

const express = require('express');
const router = express.Router();
const { testSQL } = require('../controllers/testSQL');

//Test route
router.get('/', testSQL);

module.exports = router;
