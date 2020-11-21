module.exports = {
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '12345678',
        database: 'check_in_summary',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
