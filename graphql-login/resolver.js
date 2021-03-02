"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = __importDefault(require("./models"));
var Sign = models_1.default.sign;
var log = models_1.default.log;
var group = models_1.default.group;
var resolvers = {
    Query: {
        // async signupData (root: any,{userName,email,password}:any,context: any) {
        //       const data = {userName, email, password}
        //     console.log(email)
        //     return  {message: "success", success: true}     
        //   }, 
        checkLogin: function (root, _a, context) {
            var email = _a.email, password = _a.password;
            return __awaiter(this, void 0, void 0, function () {
                var checkData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            // const msg = message
                            console.log("email", email);
                            return [4 /*yield*/, Sign
                                    .findOne({ where: { email: email, password: password } })];
                        case 1:
                            checkData = _b.sent();
                            console.log("emailSIgnuppp===>", checkData);
                            if (checkData !== null && email !== '' && password !== '') {
                                return [2 /*return*/, { message: "success", success: true }];
                            }
                            else {
                                return [2 /*return*/, { message: "email and password is wrong", success: false }];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        getGroupList: function (root, _a, context) {
            var groupName = _a.groupName;
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, group
                                .findOne({ where: { groupName: groupName } })];
                        case 1:
                            data = _b.sent();
                            return [2 /*return*/, data];
                    }
                });
            });
        }
    },
    Mutation: {
        createUser: function (root, _a) {
            var userName = _a.userName, email = _a.email, password = _a.password;
            return __awaiter(this, void 0, void 0, function () {
                var data, signData, existingData;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            data = { userName: userName, email: email, password: password };
                            signData = {
                                userName: userName,
                                email: email,
                                password: password
                            };
                            return [4 /*yield*/, Sign
                                    .findOne({ where: { email: email, password: password, userName: userName } })];
                        case 1:
                            existingData = _b.sent();
                            if (existingData || email === '' || password === '') {
                                return [2 /*return*/, { message: "failed", success: false }];
                            }
                            else if (existingData === null) {
                                Sign.create(signData);
                                return [2 /*return*/, { message: "success", success: true }];
                            }
                            return [2 /*return*/];
                    }
                });
            });
        },
        // async loginData ( root: any, {email, password}: any) {
        //     let data = {email, password}
        //   // console.log("messageee===>",message)
        //     console.log('emailllll', typeof(email))
        //     console.log("email==>", email)
        //      const checkData = await Sign
        //         .findOne({where: {email:email, password: password}})
        //       console.log("emailSIgnuppp===>", checkData)
        //         if(email || password === checkData.email || checkData.password) {
        //             log.create(data)
        //      console.log("datalog====>", data)
        //              return {message: "Success", "success": true}
        //         } else {
        //              return {"message": "wrong"}
        //         }
        // },
        createGroup: function (root, _a) {
            var groupName = _a.groupName, avatar = _a.avatar;
            return __awaiter(this, void 0, void 0, function () {
                var data;
                return __generator(this, function (_b) {
                    data = { groupName: groupName, avatar: avatar };
                    if (groupName !== " ") {
                        group.create(data);
                        // console.log("grpData====>", data)
                        return [2 /*return*/, data];
                    }
                    return [2 /*return*/];
                });
            });
        }
    }
};
exports.default = resolvers;
