const userModel = require('../models/user.model');

const get = async () => {
    return await userModel.query();
}

const save = async (userBody) => {
    const maxId = await userModel.knex().raw('SELECT (MAX(id) + 1) as tableId FROM public.user');
    console.log(maxId && maxId.rows[0].tableid)
    userBody.id = maxId && maxId.rows && maxId.rows[0] && maxId.rows[0].tableid;
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
