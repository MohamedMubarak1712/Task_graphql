"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("./models"));
var graphql_yoga_1 = require("graphql-yoga");
var schema_1 = __importDefault(require("./schema"));
var resolver_1 = __importDefault(require("./resolver"));
var server = new graphql_yoga_1.GraphQLServer({ typeDefs: schema_1.default, resolvers: resolver_1.default });
models_1.default.sequelize.sync();
server.start(function () { return console.log('Server is running on localhost:4000'); });
