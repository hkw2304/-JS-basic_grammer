

/*
const tel = '010-123-567팔';

const regExp = /^\d{3}-\d{4}-\d{4}$/;

console.log(regExp.test(tel)); // false

*/

/*
const target = 'Is this all there is?';
const regexp = /is/i; // i는 대소문자를 구분하지 않는다.
console.log(regexp.test(target)); // true
*/

/*

// 객체도 생성 가능
const target = 'Is this all there is?';
const regexp = new RegExp(/is/i);
console.log(regexp.test(target)); // true

*/

/*
const target = 'this is there is';
const regexp = /th/;
console.log(regexp.test(target));
console.log(target.match(/TH/i));
*/

// i : 대소문자 구분 안함
// g : 기본적으로 문자의 첫 글자만추출하지만 전역설정을 해줘서 문자열 전체에서 추출한다.
/*
const text = 'helLo world!!';
const regExp = new RegExp(/l/g);
// console.log(regExp.test(text));
console.log(text.match(/l/ig));
*/

/*
const text = 'Aa BB bC 12 #$#@$#';
// const regExp = /[A-Za-z0-9]+/g;
// \d : 숫자
// \D : 문자
// \w : 문자, 숫자, 언더스코어
// \W : 특수문자
// \s : 공백
// [^](조건안의 뜻) : not
// ^  : 해당문자로 시작
//  $ : 마지막
///
//  [] : 범위를 지정할 때 사용
const regExp = /[\W$]+/g
console.log(text.match(regExp));
*/

/*
const url = '123';
const regExp = /^\d+$/
console.log(url.match(regExp));
*/
 /*
const text = ' hi';
const regExp = /^\s+/
console.log(regExp.test(text));
*/

const id = "rkawk2304";
const regExp = /^[\D\d]{4,20}$/
console.log(regExp.test(id));

