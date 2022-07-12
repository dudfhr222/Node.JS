//HTTP를 사용해 API서버에 URL 방식으로 데이터 호출하는 REST API
//Postman : 개발한 API를 테스트 할 수 있는, API 개발 생산성을 높여주는 플랫폼
//uuid-apikey : API키 생성 모듈

/** MODULE
 * npm install express --save
 * npm install uuid-apikey
*/


// Web Server 구축
const express = require('express');
const app = express();
const uuidAPIKey = require('uuid-apikey');


const server = app.listen(3001, ()=>{
    console.log('Start Server : localhost:3001');
});

//API Key
console.log(uuidAPIKey.create());

const key = {
    apiKey: '1CS83NR-97J4SRB-KA5E8GC-VNF3A34',
    uuid: '0b3281d7-49e4-4ce1-9a8a-e441dd5e350c'
  };

//콜론이 있는 패스에는 어떤 값이든 들어올 수 있음
//콜론 패스에 들어오는 값을 파라미터로 받을 수 있음
app.get('/api/users/:apikey/:type', async(req,res)=>{
    let {
        apikey,
        type
    } = req.params;//요청한 파라미터 변수로 받음

    if(!uuidAPIKey.isAPIKey(apikey) || !uuidAPIKey.check(apikey, key.uuid)){ //apikey validation
        res.send('apikey is not valid');
    }else{
            // console.log(type); //요청한 파라미터 출력
        if(type == 'seoul'){
            let data = [
                {name:"홍길동", city:"seoul"},
                {name:"김철수", city:"seoul"},
            ];
            res.send(data); // 사용자에게 전달
        }else if(type=='jeju'){
            let data = [
                {name:"박지성", city:"jeju"},
                {name:"손흥민", city:"jeju"},
            ];
            res.send(data);
        }else{
            res.send('Type is not correct.');
        }
    }
});

