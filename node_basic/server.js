// server 만들기
/**
 * 설치 모듈
 * npm install express --save
 * npm install ejs --save
 * npm install mysql --save
*/

const express = require('express');
const app = express();

//listen(port, callback)
//Cannot Get / : 웹 서버는 정상적으로 동작함
const server = app.listen(3000, ()=>{
    console.log('start server : localhost:3000');
});

// routing : req시 server의 어떤 기능과 mapping 할지 결정하는 것
// button 클릭 등 요청 발생 시 router에 따라 어떤 걸 처리할지 결정

app.set('views', __dirname + '/views'); //__dirname : 현재 디렉토리 이름
//npm install ejs --save
app.set('view engine', 'ejs'); //ejs : embedded js templates, html 내부에서 js 사용 가능하게 함 (JSP와 유사)
app.engine('html', require('ejs').renderFile); //html파일을 ejs로 렌더링


app.get('/', function(req, res){
    // res.send('hello world');
    res.render('index.html');
});

app.get('/about', function(req,res){
    res.send('about page');
});


//DB
let mysql = require('mysql');
let pool = mysql.createPool({
    connectionLimit : 10,
    host : 'localhost',
    user : 'dooo',
    password : 'dooo1234',
    database : 'testdb'
});

app.get('/db', function(req, res){
    pool.getConnection(function(err,connection){
        if(err) throw err; //not conected

        //Use Connection
        connection.query('select * from dept', function(error, results, fields){
            res.send(JSON.stringify(results));
            console.log('results', results);
            //When done with the connection, release it
            connection.release();
            
            //Handle error after the release
            if(error) throw error;

            //Don't use the connection here, it has been returned to the pool

        });
    });
});