import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from '../user/user';
@Component({
  selector: 'app-user-insert',
  template:require("./user-insert.component.html")
  //templateUrl: './user-insert.component.html',
  //styleUrls: ['./user-insert.component.css']
})
export class UserInsertComponent implements OnInit {
  user : User = new User();
  @Output() outputUser = new EventEmitter<User>();
  constructor() { }

  ngOnInit() {
  }
  
  addInsertUser():void{
    this.outputUser.emit(this.user);
  }

}
