import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  template:require("./user.component.html")
  // templateUrl: './user.component.html',
  // styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  userName:string = "parkjh";
  userAge:number = 0;
  //userNameList:Array<string> = ["종혀기","혁이","jhpark"];
  userNameList:Array<Object> = [
    {name : "작년 종혁이", age : 27},
    {name : "종혁park", age : 28},
    {name : "내년 종혁이", age : 29}
  ];
  userNum:number = 0;
  constructor() { }

  ngOnInit() {
  }

  addUser():void{
    //this.userName = userName;
    this.userNameList.push({name:this.userName, age:this.userAge});
    console.log(this.userNameList);
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
}
