var express = require('express');
var router = express.Router();
const controller = require('../controllers/results');
/* GET users listing. */
router.get('/:n1/:n2', controller.suma);
router.post('/',controller.multiplicacion);
router.put('/',controller.division);
router.patch('/',controller.potencia);
router.delete('/:n1/:n2',controller.resta);
module.exports = router;
