
// true || // any true
// false || // any any
// true && // any any
// false && // any false 


// ?. : 좌항의 값이 null이나 undefined인 경우 undefined를 반환하고 아니면 우항의 프로퍼티를 반환한다.
var item = null;

var value = item?.value;
console.log(value); //undefined

var item2 = "";
var value2 = item2?.length;
console.log(value2); // 0


//?? : 좌항의 피연산자가 null또는 undefined인 경우 우항의 피연산자를 반환하고, 그렇지 않으면 좌항의 피연산자를 반환한다.

var item3 = null;
var value3 = item3 ?? "default string";
console.log(value3);
var item4 = NaN;
var value4 = item4 ?? "default string";
console.log(item4);