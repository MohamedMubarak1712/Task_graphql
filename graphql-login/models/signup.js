"use strict";
module.exports = function (sequelize, DataTypes) {
    var Sign = sequelize.define('signup', {
        userName: DataTypes.STRING,
        email: DataTypes.STRING,
        password: DataTypes.STRING,
    });
    return Sign;
};
// export default signSchema
