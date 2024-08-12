const express= require('express');
const { register, login, getHome } = require('../controllers/user_controller');
const router= express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/', getHome)
 
module.exports=router;