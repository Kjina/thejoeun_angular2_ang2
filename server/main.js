var express = require('express');
var morgan = require('morgan'); 
var bodyParser = require('body-parser');
var path = require("path");

var app = express();
var dbConfig = require('./conf/dbconfig.js');
const mysql = require('mysql');
const mysql2 = require('promise-mysql');
var connection = mysql.createConnection(dbConfig);
var connection2 = mysql2.createConnection;
app.set('port', (process.env.PORT || 3000));

app.use('/', express.static(__dirname + '/../dist'));
app.use('/scripts', express.static(__dirname + '/../node_modules'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));


app.listen(app.get('port'), function() {
    console.log('Angular2 fullstack listening on port '+app.get('port'));
});
var errorHandle = (err)=>{
    var result = {};
    result["error"] = {"code" : err.code,
    "no" : err.errno,
    "msg" : err.sqlMessage
    };
    return result;
}

var rowsHandle = (rows)=>{
    var result = {};
    result["list"] = rows;
    return result;
}

app.get('/api/userhis/:userNo', (req, res, next)=>{
    var values = [req.params.userNo];
    var sql = "select userNo, userData from user_his where userNo=?";
    connection2(dbConfig).then((conn)=>{
        return conn.query(sql, values);
    }).then(rowsHandle).catch(errorHandle).then((result)=>{
        console.log(result);
        res.json(result);
    });
});

app.post('/api/users',(req,res,next)=>{ 
    // var sql = "select 1 from user_info where userId =?";
    // var values = [req.body.userId];
    // connection2(dbConfig).then((con)=>{
    //     return con.query(sql,values);
    // }).then((result)=>{
    //     if(result.length>0){
    //         throw{"code":"중복에러","errno":1,"sqlMessage":"중복"}
    //     }
    //     return true;
    // }).then


    var sql = "insert into user_info(";
    sql += "userId, userName, userPwd, complete)";
    sql += "values(?,?,?,?)";
    var pm = req.body;
    var values = [pm.userId, pm.userName, pm.userPwd, pm.complete];
    
    connection2(dbConfig).then((con)=>{
        return con.query(sql,values);
    }).then((result)=>{
        if(result.affectedRow == 1){
            result["msg"] = {"code":200,"no":20,"msg":"정상적으로 입력됨"};
        }
        return result;
        //}).catch(errorHandle)
    }).catch(errorHandle).then((result)=>{
        //res.json(result);
        sql = "SELECT userNo, userName, userId, userPwd, complete from user_info where 1=1";
        connection2(dbConfig).then((conn)=>{
            return conn.query(sql);
        }).then(rowsHandle).catch(errorHandle).then((result)=>{
            console.log(result);
            res.json(result);
            //next();
        });
    });
      
})

app.use(function (req, res, next) {
    console.log(req.path);
    var url = req.path;
    if(url === '/api/users'){
        connection.query('SELECT userNo, userName, userId, userPwd from user_info',
        function(err, rows){
            if(err) throw err;

            console.log('The solution is : ', rows);
            //res.send(rows);
            res.json(rows);
        })
    }else{
        res.sendFile(path.resolve(__dirname + '/../dist/index.html'));
    }
});
