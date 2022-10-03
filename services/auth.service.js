const userModel = require('../models/user.model');

const signIn = async (userObject) => {
   return userModel.query().where('email', userObject.email).andWhere('password', userObject.password).first();
    
}

module.exports = {
    signIn
}