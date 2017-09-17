const router = require('express').Router();
const control = require('../controller/requestHandler');


router.get('/getItems', control.getItems);

router.post('/postItem', control.postItem);

router.delete('/deleteItem/:id', control.deleteItem);

module.exports = router;