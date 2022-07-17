"use strict";

//map
const numbers = [1, 2, 3, 4, 5, 6, 7];

class Student {
  constructor(name, klanguage, english, math) {
    this.name = name;
    this.klanguage = klanguage;
    this.english = english;
    this.math = math;
  }
}

const student1 = new Student("홍길동", 95, 85, 75);
const student2 = new Student("동", 85, 75, 65);
const student3 = new Student("길동", 55, 45, 65);
const student4 = new Student("고길동", 85, 35, 15);

const students = [student1, student2, student3, student4];

const result = numbers.map((number) => {
  return number * 2;
});
console.log(result);

console.log(
  "영어점수",
  // students.map((student)=>{student.english})
  students.map((student) => {
    return student.english;
  })
);

//some
const fruits = ["사과", "딸기", "배", "참외", "딸기", "수박"];
console.log(
  fruits.some((fruit) => {
    return fruit === "배";
  })
);
console.log(
  fruits.some((fruit, idx) => {
    console.log(idx, "fruit", fruit);
    return fruit === "배";
  })
);
console.log(
  students.some((student) => {
    return student.english === 35;
  })
);

//every
console.log(
  "some",
  numbers.every((number) => number < 8)
);

console.log(
  "학생들의 수학 점수가 모두 80점 이상?",
  students.every((student) => student.math >= 20)
);

//filter
console.log(
  "짝수 출력",
  numbers.filter((number) => number % 2 === 0)
);
console.log(
  "홀수 출력",
  numbers.filter((number) => number % 2 === 1)
);
console.log(
  "영어 점수 50이상",
  students.filter((stu) => stu.english >= 50)
);

//reducer
//누적 합계
numbers.reduce((acc, cur, idx, src) => {
  console.log("acc : ", acc, "cur: ", cur, "idx: ", idx, "src: ", src);
  return acc + cur;
});
/*
acc -> 초기값 : 0
numbers.reduce((acc,cur,idx,src)=>{
    console.log('acc : ',acc,'cur: ',cur,'idx: ',idx,'src: ',src);
    return acc;
}, 0)
*/

//중복 값 제거
const res = fruits.reduce((arr, cur) => {
  if (arr.includes(cur) === false) {
    arr.push(cur);
  }
  return arr;
}, []);
console.log(fruits);
console.log('누적 제거',res);