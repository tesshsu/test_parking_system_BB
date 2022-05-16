//Importation d'express
const express = require('express');

//Création du routeur
const router = express.Router();

//Importation de password-validator
const password = require('../middleware/password');

//Importation du limiter
const limiter = require('../middleware/limiter');

//Importation du controller
const userCtrl = require('../controllers/user');

//Importation de l'authentification
const auth = require('../middleware/auth');

//Création des routes 
router.post('/signup', password, userCtrl.signup);
router.post('/login', limiter.loginLimiter, userCtrl.login);
router.get('/users', auth, userCtrl.getAllUsers);

//Exportation du routeur
module.exports = router;