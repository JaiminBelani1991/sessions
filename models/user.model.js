const Model = require('./auth');

class User extends Model {
    static get tableName() {
        return 'user';
    }

    static get idColumn() {
        return 'id'
    }
}

module.exports = User;