export class User {
    userNo : number = 0;
    userId : string = '';
    userName : string = '';
    userPwd : string = '';
    complete : boolean = false;

    constructor(values : Object = {}) { // 키만 같은 애들을 자동으로 set
        Object.assign(this, values);
    }

    setUserNo(userNo:number):void{
        
        this.userNo = userNo;
    }
}
