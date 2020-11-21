module.exports = {
    port: 80,
    db: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: '',
        database: 'check_in_summary',
        seq_options: {
            logging: false,
            dialectOptions: {
                charset: 'utf8',
            },
        },
    },
};
