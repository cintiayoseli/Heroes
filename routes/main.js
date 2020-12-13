
const express = require ('express')
const router = express.Router()
const mainController = require ('../controllers/mainController');
const heroesController = require ('../controllers/heroesController')

router.get('/', mainController.index);


router.get('/heroes/detalles/:idHeroe',heroesController.detalle)
router.get('/heroes/bio/:id/:ok?',heroesController.bio)


module.exports = router 
