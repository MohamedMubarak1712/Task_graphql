"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var db_config_1 = __importDefault(require("../config/db.config"));
var Sequelize = require("sequelize");
var sequelize = new Sequelize(db_config_1.default.DB, db_config_1.default.USER, db_config_1.default.PASSWORD, {
    host: db_config_1.default.HOST,
    dialect: db_config_1.default.dialect,
    operatorsAliases: false,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle
    }
});
var db = {};
// var Sequelize:any
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.sign = require("./signup.ts")(sequelize, Sequelize);
db.log = require("./login.ts")(sequelize, Sequelize);
db.group = require("./group.ts")(sequelize, Sequelize);
exports.default = db;
