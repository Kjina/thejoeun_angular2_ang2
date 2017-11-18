import { Injectable } from '@angular/core';
import {CommonServiceService} from '../common/common-service.service'
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import {User} from './user';
import {UserHis} from './userhis';
@Injectable()
export class UserDataService extends CommonServiceService{
  userList:Array<User> = [];
  lastUserNo:number = 0;
  private usersUrl:string = "api/users";
  private userHisUrl:string = this.usersUrl +'/his/';

  constructor(protected _http:Http) { 
    super(_http);
    // let testUser : User = new User({
    //   userId : "test1",
    //   userName : "테스트1",
    //   userNo : 1,
    //   complete : true,
    //   userPwd : "test1"
    // });
    // this.userList.push(testUser);
  
    // this.userList.push({
    //   userId:"test2",
    //   userName : "테스트2",
    //   userNo : 2,
    //   complete : true,
    //   userPwd : "test2"
    // });

    // this.userList.push({
    //   userId:"test3",
    //   userName : "테스트3",
    //   userNo : 3,
    //   complete : false,
    //   userPwd : "test3"
    // });
  }
  
  getUserList():Array<User>{
    return this.userList;
  }
  
  addUser(user:User):Observable<User[]>{
   // this.userList.push(user);
    return super.postJson(this.usersUrl, user);
  }

  addInsertUser(user:User):UserDataService{
    this.lastUserNo ++;
    user.setUserNo(this.lastUserNo);
    this.userList.push(new User(user));
    return this;
  }

  getUsers() : Observable<User[]>{
    return super.getJson(this.usersUrl);
  }

  getUsersHis(userNo:number):
  Observable<UserHis[]>{
    console.log("abc",this.userHisUrl+userNo);
    return super.getJson(this.userHisUrl+userNo);
  }

}
