const userModel = require('../models/user.model');

const get = async () => {
    return await userModel.query();
}

const save = async (userBody) => {
    return await userModel.query().insertGraphAndFetch(userBody);
}

const getById = async (id) => {
    return await userModel.query().where('id', id).first();
}

const put = async (userBody, id) => {
    return await userModel.query().upsertGraphAndFetch(userBody)
}

const remove = async(id) => {
    return await userModel.query().delete().where('id', id);
}

module.exports = {
    get,
    save,
    getById,
    put,
    remove
}
