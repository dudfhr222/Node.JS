// 비동기를 편리하게 해주는 객체
// 기능 수행 후 오류 발생 시 에러 전달

// Promise is JS object for asynchronous operation
// state : pending -> fulfilled or rejected
/**
 * pending : Promise가 생성된 뒤 정해진 operation을 수행중일 때
 * fulfilled : 작업 수행 완료
 * rejected : 에러 발생
 */
// producer, consumer (data 제공자, 사용자)

// 1. Producer
// when new Promise is created, the executor runs automatically
/**
 * promise 내부에 네트워크 연결 코드가 있다면 바로 이를 수행함
 * 만약 요청이 요구시에만 행해져야 한다면 불필요한 커넥션이 생길 수 있음
 */
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network,)
  // TIP! 시간이 걸리는 작업은 promise를 활용해 비동기적으로 처리하는 것이 좋음
  console.log("doing something");
  setInterval(() => {
    resolve("ellie");
    // reject(new Error('no netWork'));
  }, 2000);
});
// callbacks
// resolve : 정상적으로 동작시 행해지는 함수
// reject : 오류 발생시 수행되는 함수

// 2. Consumers : then, catch, finally
//then -> 정상적으로 잘 수행된다면 resolve()를 통해 value를 받아 callback 함수 수행
//finally : 무조건 마지막에 호출됨
promise
  .then((value) => {
    //value : ellie를 받음
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(1), 1000;
  });
});
fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("HEN"), 1000;
    });
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    // setTimeout(() => resolve(`${hen} => EGG`), 1000);
    // ERROR 발생 구현
    setTimeout(() => reject(new Error(`error! ${hen} => EGG`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => FRIED`), 1000);
  });

getHen()
  // 인자가 하나인 함수의 경우 아래와 같이 줄일 수 있음
  // .then(hen => getEgg(hen))
  .then(getEgg)
  .catch(error => {
    return 'BREAD';
  })
  // .then(egg => cook(egg))
  .then(cook)
  // .then(meal => console.log(meal));
  .then(console.log)
  .catch(console.log);  

  //then에서 발생한 error를 handling하기 위해선 바로 다음에 catch 작성