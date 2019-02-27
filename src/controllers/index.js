const express = require('express');

const router = express.Router();
const home = require('./home');
const checkUser = require('./checkUser');
const signIn = require('./signIn');
const signOut = require('./signOut');

router.get('/', home.get);
router.get('/signIn', signIn.sign);
router.post('/signin', checkUser.checkuser);
router.get('/signOut', signOut.signout);
module.exports = router;
