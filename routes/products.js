const router = require('express').Router();

const {index, search, create, update, remove} = require('../controllers/productController');

router.get('/', index);
router.get('/search/:nameID', search);
router.post('/create', create);
router.put('/update/:id', update);
router.put('/remove/:id', remove);

module.exports = router;