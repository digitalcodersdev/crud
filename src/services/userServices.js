const User = require('../models/user')

module.exports = {
  addUser: async (user) => {
    const userModel = new User(user)
    return await userModel.save()
  },
  findAllUsers: async () => {
    return await User.find()
  },
  findUserById: async (userId) => {
    return await User.findOne({ where: { _id: userId } })
  },
  updateUser: async (user) => {
    return await User.findByIdAndUpdate(user._id, { $set: user }, { new: true })
  },
  deleteUser: async (userId) => {
    return await User.deleteOne({ where: { _id: userId } })
  },
}
