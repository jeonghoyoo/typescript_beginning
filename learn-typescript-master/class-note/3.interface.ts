interface User {
    name: string,
    age: number,
}

// 변수에 활용한 인터페이스
var jeongho: User = {
    name: 'jeongho',
    age: 30,
}

// 함수에 인터페이스 활용
function getUser(user: User) {
    console.log(user);
}

const user1 = {
    name: 'user1',
    age: 30,
}

getUser(user1);

// 함수의 스펙(구조)에 인터페이스를 활용
interface SumFunction {
    (a: number, b: number): number
}

let sum: SumFunction;
sum = function(a: number, b: number): number {
// sum = function(a, b) {
    return a + b;
}

// 인덱싱
interface StringArray {
    [index: number]: string;
}

var arr: StringArray = ['a', 'b', 'c'];
// arr[0] = 10;

// 딕셔너리 패턴
interface StringRegexDictionary {
    [key: string]: RegExp;
}

var obj: StringRegexDictionary = {
    cssFile: /\.css$/,
    jsFile: /\.js$/,
}

Object.keys(obj).forEach(value => {
    const objValue = obj[value];
    console.log(objValue);
})

// 인터페이스 확장
interface Person {
    name: string;
    age: number;
}

interface Developer extends Person {
    language: string;
}

var dev1: Developer = {
    language: 'java',
    name: 'dev1',
    age: 30,
}