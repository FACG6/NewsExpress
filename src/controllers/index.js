const express = require('express');

const router = express.Router();
const home = require('./home');
const checkUser = require('./checkUser');
const signIn = require('./signIn');
const signOut = require('./signOut');
const signUp = require('./signUp');
const addJournalist = require('./addUser');
const error = require('./error');

router.get('/', home.get);
router.get('/signIn', signIn.sign);
router.post('/signin', checkUser.checkuser);
router.get('/signOut', signOut.signout);

router.get('/signUp', signUp.get);
router.post('/signUp', signUp.post);
router.post('/addUser', addJournalist.add);
router.use(error.notfound);
router.use(error.serverError);

module.exports = router;
