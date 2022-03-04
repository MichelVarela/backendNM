const router = require('express').Router();

const {index, create, update, remove} = require('../controllers/userController');

router.get('/', index);
router.post('/create', create);
router.put('/update/:id', update);
router.put('/remove/:id', remove);

module.exports = router;