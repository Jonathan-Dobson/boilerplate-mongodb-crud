const router = require('express').Router();

router.post('/', require('./create') );
router.get('/', require('./read') );
router.get('/:itemId', require('./readOne') );
router.put('/:itemId', require('./update') );
router.delete('/:itemId', require('./delete') );

module.exports = router;