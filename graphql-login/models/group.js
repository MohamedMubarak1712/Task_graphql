"use strict";
module.exports = function (sequelize, DataTypes) {
    var Group = sequelize.define('group', {
        groupName: DataTypes.STRING,
        avatar: DataTypes.STRING,
    });
    return Group;
};
