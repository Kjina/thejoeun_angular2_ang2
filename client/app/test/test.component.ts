import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template:require("./test.component.html")
  //templateUrl: './test.component.html',
  //styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  name:string = "test";
  num1:string;
  num2:string;
  result:number;
  op:string;
  isRed : boolean = true;

  constructor() { }

  ngOnInit() {
  }
  alertName():void{
    alert(this.name);
  }

  cal():void{
    if(this.op == "+"){
      this.result = parseInt(this.num1)+parseInt(this.num2);
      console.log(this.result);
    }else if(this.op == "-"){
      this.result = parseInt(this.num1)-parseInt(this.num2);
      console.log(this.result);
    }else if(this.op == "*"){
      this.result = parseInt(this.num1)*parseInt(this.num2);
      console.log(this.result);
    }else if(this.op == "/"){
      this.result = parseInt(this.num1)/parseInt(this.num2);
      console.log(this.result);
    }else{
      alert("연산자를 제대로 입력해주세요");
      return;
    }
  }
  
}
