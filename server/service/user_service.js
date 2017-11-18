const db = require('../dao/db_util.js');
const jwt = require('jsonwebtoken');
var dbm = new db(); // function 이라 한번은 반드시 호출을 해야됨
var userService = {};
userService.selectUser = selectUser;
userService.selectUserHis = selectUserHis;
userService.loginUser = loginUser;
userService.insertUser = insertUser;

function selectUser(po){
    return dbm.runSql("SELECT_USER",po);
}
function selectUserHis(po){
    return dbm.runSql("SELECT_USER_HIS",po);
}
function loginUser(po){
  //  return this.selectUser({"userId":po.userId});
    /*.then((result)=>{
        if(result.list.length==0){
            return dbm.promiseException({"code":100,})
        }
    })*/
}
function insertUser(po){
   // return dbm.updateSql("INSERT_USER",po);
}
module.exports = userService;