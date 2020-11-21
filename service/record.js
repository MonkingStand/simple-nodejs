const models = require('../model');

const Record = models.db.Record;

module.exports = {
    async create(data) {
        const record = await Record.create(data);

        return record.toJSON();
    },
    async findMany(query){
        query = query || {};

        const users = await Record.findAll(query);

        return users.map(record => record.toJSON());
    },
};
