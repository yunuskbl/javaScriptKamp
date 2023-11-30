import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js";
import User from "../models/user.js";
import  UserService  from "../services/userService.js";

console.log("User Component Yüklendi");


let logger1 = new ElasticLogger()
let userService = new UserService(logger1);

let user1 = new User(1,"Yunus","Kobal","Bursa");


userService.add(user1);
userService.list()
userService.getById(3)
