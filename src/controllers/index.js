const express = require('express');

const router = express.Router();
const home = require('./home');
const signIn = require('./login');
const checkUser = require('./checkUser');
const signUp = require('./signUp');
const auth = require('./isCookie');
const addJournalist = require('./addUser');

router.get('/', home.get);
router.get('/login', signIn.get);
router.post('./checkuser', checkUser.checkUser);
router.get('/signUp', signUp.get);
router.post('/signUp', signUp.post);
router.use(auth.get);
router.post('/addUser', addJournalist.add);

module.exports = router;
