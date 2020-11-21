const moment = require('moment');

module.exports = (sequelize, DataTypes) => {
    const Record = sequelize.define('Record', {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
        },
        // 单位
        company: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 姓名
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 职务
        job: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 电话
        mobile: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        // 祝语
        congratulation: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gmtCreate: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'gmt_create',
            get: function() {
                const gmtCreate = this.getDataValue('gmtCreate');

                return moment(gmtCreate).format('YYYY-MM-DD HH:mm:ss');
            },
        },
        gmtModified: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
            field: 'gmt_modified',
            get: function() {
                const gmtModified = this.getDataValue('gmtModified');

                return moment(gmtModified).format('YYYY-MM-DD HH:mm:ss');
            },
        },
    }, {
        tableName: 'record',
        timestamps: true,
        underscored: true,

        createdAt: 'gmtCreate',
        updatedAt: 'gmtModified',

        classMethods: {
            // associate(models) {
            // example on how to add relations
            // Article.hasMany(models.Comments)
            // },
        },
    });

    return Record;
};
