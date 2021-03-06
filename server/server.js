const express = require('express');
const morgan = require('morgan'); 
const bodyParser = require('body-parser');
const path = require("path");
const app = express();
const us = require('./service/user_service');
const uc = require('./controller/user_controller');

app.set('port', (process.env.PORT || 80)); // 포트라는 키값에 80을 넣었을 뿐... 포트가 열리게는 하지 않음 
app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use('/api/users', uc);

app.use((req, res, next)=>{
    res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
});

app.listen(app.get('port'),function(){ //포트연결 서버실행
    console.log('해당포트로 서버 실행 =>'+app.get('port'));
});

/*app.get('/api/users/his/:userNo',(req,res,next)=>{
    var po = {"userNo":req.params.userNo};
    console.log(po);
    us.selectUserHis(po)
    .then((result)=>{
        console.log(result);
        res.json(result); 
    });
});

app.get('/api/users',(req,res,next)=>{
    var po = {}
    if(req.query.user){
        po = JSON.parse(req.query.user);
    }
    console.log(po);
    us.selectUser(po)
    .then((result)=>{
        console.log(result);
        res.json(result); 
    });
});

app.post('/api/users',(req,res,next)=>{
    us.insertUser(req.body)
    .then((result)=>{
        res.json(result);
    });
});
*/

