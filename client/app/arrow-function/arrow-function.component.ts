import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arrow-function',
  // templateUrl: './arrow-function.component.html',
  // styleUrls: ['./arrow-function.component.css']
  template : require('./arrow-function.component.html')
})
export class ArrowFunctionComponent implements OnInit {
  private title : string = "화살표 함수 테스트"
  text : string = "테스트";

  constructor() { }

  ngOnInit() {
  }

  testNormalFunction1(){ 
    alert(this.text);
    let test = function():void{
      alert(this.text);
    }
    try{
      test();
    }catch(e){
      alert(e);
    }
  }
  
  testNormalFunction2(){
    let test = function(obj:any):void{
      alert(obj.text);
    }
    test(this);
  }

  testNormalFunction3(){
    let test = function():void{
      alert(this.text);
    }
    test.call(this); 
  }

  testArrowFunction():void{
    let test = ():void => {
      alert(this.text);
    }
    test();
  }
  
}
