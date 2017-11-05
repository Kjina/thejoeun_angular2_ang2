import { Component, OnInit , Input, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user';

@Component({
  selector: 'app-user-list',
  template : require("./user-list.component.html"),
  inputs : ['userList']
  //templateUrl: './user-list.component.html',
  //styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList:Array<User>;
  constructor() { }

  isTest : boolean = true;
  @Output() outputTest = new EventEmitter<boolean>();
  
  passValueToParent(){
    this.isTest = !this.isTest;
    this.outputTest.emit(this.isTest);
  }

  ngOnInit() {
  }

}
