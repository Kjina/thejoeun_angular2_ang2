import { Component, OnInit } from '@angular/core';
import { UserDataService } from './user-data-service.service';
import { User } from './user';

@Component({
  selector: 'app-user', 
  template:require("./user.component.html"),
  // templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
  providers:[UserDataService] // 해당 서비스를  
})
export class UserComponent implements OnInit {
  
  userName:string = "parkjh";
  userAge:number = 0;
  errorMsg:string = "";
  //userNameList:Array<string> = ["종혀기","혁이","jhpark"];
  // userNameList:Array<Object> = [
  //   {name : "홍길동", age : 27},
  //   {name : "이순신", age : 28},
  //   {name : "세종대왕", age : 29}
  // ];

  // userList:Array<User>=[{
  //   userId:"test",
  //   userName:"테스트",
  //   userNo : 1,
  //   complete :true,
  //   userPwd:"test"
  // }]
  
  userList:Array<User>=[]
  
  userNameList:Array<Object> = [
    {userName : "홍길동", userNo : 6,
    userId : "tt2", userPwd : "1"
    }
  ];
  
  userNum:number = 0;
  constructor(private uds:UserDataService) { }
  
  ngOnInit() {
  }
  
  // selectUserList():void{
  //   this.userList = this.uds.getUserList();
  // }

  // addUser():void{

  //   let uds2 : UserDataService =
  //   this.uds.addUser({
  //     userId:"tt",
  //     userNo:1,
  //     userPwd:"tt",
  //     userName:"tt",
  //     complete:true
  //   });
  //   //this.userName = userName;
  //   //this.userNameList.push({name:this.userName, age:this.userAge});
  //   this.userList = uds2.userList;
  //   console.log(uds2.userList);
  //   console.log(this.userList);
  // }

  getUsers():void{
    this.uds.getUsers().subscribe(
      users => {
        this.userList = users
        console.log(users);
      },
      error => this.errorMsg = <any>error
    );
  }

  updateUser():void{
    this.userNameList[this.userNum] = {name:this.userName, age:this.userAge};
    alert("수정 완료");
  }
  deleteUser():void{
    let delObj:Object = this.userNameList[this.userNum];
    alert(delObj["name"] + "삭제 완료")
    this.userNameList.splice(this.userNum, 1);
  }
  outputTest(isTest:boolean){
    alert(isTest);
  }
  outputUser(user:User){
    this.userList = this.uds.addInsertUser(user).userList;
  }
}
