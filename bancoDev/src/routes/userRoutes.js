const {Router} = require('express')
const router = Router()
const userController = require('../controllers/user.controller')

router.get('/user/:id', userController.getUser)
router.get('/users', userController.getUsers)
router.post('/user/create', userController.createUser)
router.delete('/user/:id', userController.deleteUser)
router.put('/user/update/:id', userController.upUser)
router.put('/user/update/:id', userController.upUsers)

module.exports = router