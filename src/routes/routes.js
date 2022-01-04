const router = require('express').Router()
const UserController = require('../controller/userController')

router.post('/user/add-user', UserController.addUser)
router.get('/user/get-all-users', UserController.getAllUsers)
router.get('/user/get-user-by-id/:id', UserController.getUserById)
router.put('/user/update-user', UserController.updateUser)
router.delete('/user/delete-user/:id', UserController.deleteUser)

module.exports = router
