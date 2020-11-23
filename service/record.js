const moment = require('moment');
const Database = require('better-sqlite3');
const { resolve } = require('path');
const db = new Database('model.db');

const createTable = `CREATE TABLE IF NOT EXISTS record ('id' INTEGER PRIMARY KEY AUTOINCREMENT, 'company' varchar, 'job' varchar, 'name' varchar, 'mobile' varchar, 'congratulation' varchar, 'createDate' varchar);`;

db.exec(createTable);

module.exports = {
    async create(data) {
        const insert = db.prepare('INSERT INTO record (company, job, name, mobile, congratulation, createDate) VALUES (@company, @job, @name, @mobile, @congratulation, @createDate)');

        data.congratulation = data.congratulation || '';

        for (const key in data) {
            data[key] = (data[key] || '').trim();
        }

        data.createDate = moment().format('YYYY-MM-DD HH-mm-ss:SS');

        return insert.run(data);
    },
    async findMany() {
        const result = await db.prepare('SELECT * FROM record').all();

        return result;
    },
};
