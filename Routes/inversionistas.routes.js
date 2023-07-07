const {Router} = require('express');
const {getinversionistas, postInvers} = require('../controllers/inversionistas')
const {getConcepto_Inv, postConcepto} = require('../controllers/concepto_inversion')
const router = Router();

router.get('/', getinversionistas);
router.post('/', postInvers);
router.post('/concepto', postConcepto)
router.get('/concepto', getConcepto_Inv);


module.exports = router;