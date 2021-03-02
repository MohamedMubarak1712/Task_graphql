"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var typeDefs = "\n      type Signup {\n          userName: String!\n          email: String!\n          password: String!\n      }\n\n      type Login {\n          message: String!\n          success: Boolean!\n      }\n\n   \n\n      type Group {\n          groupName: String!\n          avatar: String\n      \n      }\n\n      type Query {\n          checkLogin(email: String!,password: String!): Login\n          getGroupList(groupName: String!): Group\n      }\n\n      type Mutation {\n          createUser(userName: String!, email: String!, password: String!): Login\n          createGroup(groupName: String!, avatar: String): Group\n      }\n\n";
exports.default = typeDefs;
