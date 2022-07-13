/**
* Function
*
* fundamental building block in the program
* subprogram can be used multiple times
* performs a task or calculates a value
* function is object in JS
* naming : doSomething, command, verb
*/

function printHello(){
    console.log('Hello');
}
printHello();

function log(msg){
    console.log(msg);
}
log('Hello@');
log(1234);

/** 
* Parameters
*
* premitive parameters : passed by value
* object parameters : passed by reference
*/
function changeName(obj){
    obj.name = 'coder';
}
const ellie = {name : 'ellie'};
changeName(ellie);
console.log(ellie);

// Default Parameters
function showMsg(msg, from = 'unknown'){
    console.log(`${msg} by ${from}`);
}
showMsg('Hi');

// Rest Parameters
function printAll(...args){ //args : 배열
    for(let i =0; i<args.length;i++){
        console.log(args[i]);
    }

    for(const arg of args){
        console.log(arg);
    }

    args.forEach((arg)=> console.log(arg));
}
printAll('dream','coding','ellie');

// Local scope
// 밖에서는 안이 보이지 않고, 안에서는 밖을 볼 수 있음
let globalMsg = 'global';
function printMsg(){
    let msg = 'hello';
    console.log(msg);
    console.log(globalMsg);
}
printMsg();

// Early return, early exit
//bad
function upgradeUser(user){
    if(user.point>10){
        // long upgrade logic...
    }
}

//good
function upgradeUser(user){
    if(user.point<=10){
        return;
    }
    // long upgrade logic...
}

/**
* First-class function
*
* functions are treated like any other variable
* can be assigned as a value to variable
* can be passed as an argument to other functions
* can be returned by another function
*/

// Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the execution reaches it

const print = function(){ //anonymous function
    console.log('print');
};
print(); //function expression은 할당된 다음부터 호출 가능
const printAgain = print;
printAgain();

// Callback function using function expression
function randomQuiz(answer, printYes, printNo){
    if(answer === 'love you'){
        printYes();
    }else{
        printNo();
    }
}
//anonymous function
const printYes = function(){
    console.log('yes!');
};
//named function
//better debugging in debugger's stack traces
//recursions
const printNo = function print(){
    console.log('no!');
};

randomQuiz('wrong',printYes, printNo);
randomQuiz('love you',printYes, printNo);

//Arrow Function
// always anonymous
const simplePrint = () => console.log('simplePrint!') ;
const add = (a,b) => a+b;

//IIFE : Immediately Invoked Function Expression
// 선언과 동시에 호출
(function hello(){
    console.log('IIFE');
})();

