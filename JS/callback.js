// JS is synchronous → hoisting 이후로 작성된 순서대로 코드가 실행됨
// hoisting → var, function declaration이 제일 먼저 선언됨
// asynchronous : 언제 실행될 지 모름

// Callback : 함수의 파라미터로 함수를 사용해, 파라미터의 함수를 원할 때 바로 사용할 수 있도록 하게 함
// Synchronous callback
function printImmediately(print){
    print();
}
printImmediately(()=>{
    console.log('hello');
});
// Asynchronous callback
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}
printWithDelay(()=> console.log('async callback'), 2000);

//콜백 지옥
/*
    가독성 떨어짐
    
*/
// user로부터 id와 pwd 받아와 login
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(()=>{
            if((id ==='ellie' && password ==='dream')||(id==='coder' && password ==='academy')){
                onSuccess(id);
            }else{
                onError(new Error('not found'));
            }
        }, 2000);
    }
    
    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'ellie'){
                onSuccess({name:'ellie', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        }, 1000);
    }
}

const UserStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');

UserStorage.loginUser(
    id, 
    password, 
    user=> {
        UserStorage.getRoles(
            user,
            userWithRoles => {
                alert(`Hello ${userWithRoles.name}, you have a ${userWithRoles.role} role`);
            },
            error => {
                console.log(error)
            }
            )
    }, 
    error => {console.log(error)}
    );
