const express = require('express');
const homeController = require('../controllers/home_controller');
const  router = express.Router();

module.exports = router;

router.get('/',homeController.home) //home function in controller folder : home_controller.js
