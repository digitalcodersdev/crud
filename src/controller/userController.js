const resParams = require('../config/params')
const userServices = require('../services/userServices')
const HTTP_STATUS = require('../helpers/httpStatus')

module.exports = {
  addUser: async (req, res) => {
    const user = req.body
    const params = { ...resParams }
    try {
      params.data = await userServices.addUser(user)
      if (params.data) {
        params.message = 'User added successfully'
        res.status(HTTP_STATUS.OK).send(params)
      }
    } catch (error) {
      console.log(error)
      params.data = error
      res.status(HTTP_STATUS.BAD_REQUEST).send(params)
    }
  },
  getAllUsers: async (req, res) => {
    const params = { ...resParams }
    try {
      params.data = await userServices.findAllUsers()
      if (params.data) {
        params.message = 'successfully find all users'
        res.status(HTTP_STATUS.OK).send(params)
      }
    } catch (error) {
      console.log(error)
      params.data = error
      res.status(HTTP_STATUS.BAD_RE).send(params)
    }
  },
  getUserById: async (req, res) => {
    const params = { ...resParams }
    const userId = req.params.id
    try {
      params.data = await userServices.findUserById(userId)
      if (params.data) {
        params.message = 'User find successfully'
        res.status(HTTP_STATUS.OK).send(params)
      }
    } catch (error) {
      params.data = error
      console.log(error)
      res.status(HTTP_STATUS.BAD_REQUEST).send(params)
    }
  },
  updateUser: async (req, res) => {
    const params = { ...resParams }
    const user = req.body
    try {
      params.data = await userServices.updateUser(user)
      if (params.data) {
        params.message = 'User updated successfully'
        res.status(HTTP_STATUS.OK).send(params)
      }
    } catch (err) {
      params.data = err
      console.error(err)
      res.status(HTTP_STATUS.BAD_REQUEST).send(params)
    }
  },
  deleteUser: async (req, res) => {
    const params = { ...resParams }
    const userid = req.params.id
    try {
      params.data = await userServices.deleteUser(userid)
      if (params.data) {
        params.message = 'user deleted successfully'
        res.status(HTTP_STATUS.OK).send(params)
      }
    } catch (error) {
      params.data = err
      console.error(err)
      res.status(HTTP_STATUS.BAD_REQUEST).send(params)
    }
  },
}
