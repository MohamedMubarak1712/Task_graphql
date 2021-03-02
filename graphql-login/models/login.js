"use strict";
//  const Sign = require ('./signup')
module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define('login', {
        email: {
            type: DataTypes.STRING,
            foreignKey: true
        },
        password: DataTypes.STRING,
    });
    var Sign = sequelize.define('signup', {
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    Login.belongsTo(Sign, { foreignKey: 'email' });
    return Login;
};
