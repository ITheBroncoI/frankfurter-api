const { Router } = require('express');
const controllers = require('../controllers');

const router = Router();

router.get('/', (req, res) => res.send('Welcome'))

router.post('/divisas', controllers.createDivisa);
router.get('/divisas', controllers.getAllDivisas);

module.exports = router;
