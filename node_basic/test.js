console.log('Hello World') //npm test.js → 해당 파일의 코드 실행

// npm install nodemailer → 해당 모듈(nodemailer) 설치
// node_modules, package-lock.json 설치됨
// package-lock.json : 설치된 모듈 정보

const nodemailer = require('nodemailer'); //설치한 nodemailer 불러옴

const email = {
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "0e3d1103f37848",
      pass: "a042ef26533309"
    }
}; //계정 정보 → mailtrap.io

const send = async (option) =>{
    nodemailer.createTransport(email).sendMail(option, (error, info) => {
        if(error){
            console.log(error);
        }else{
            console.log(info);
            return info.response;
        }
    });
};

let email_data = {
    from : 'seungwon.go@gmail.com',
    to : 'seungwon.go@gmail.com',
    subject : 'test',
    text : 'nodejs 한시간만에 끝내보자.'
} 

send(email_data);