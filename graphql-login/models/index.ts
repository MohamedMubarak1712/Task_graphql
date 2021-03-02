export {};
import dbConfig from "../config/db.config";

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle 
  }
});


 const db: any = {};
// var Sequelize:any
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.sign = require("./signup.ts")(sequelize, Sequelize);
db.log = require("./login.ts")(sequelize, Sequelize);
db.group = require("./group.ts")(sequelize, Sequelize)

export default db