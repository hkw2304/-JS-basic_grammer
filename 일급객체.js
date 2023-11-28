

// 일급 객체

// 1.함수는 무명의 리터럴로 생성할 수 있다.
const increase = function(num) {
    return ++num;
};
const decrease = function(num) {
    return --num;
};
// 2.함수는 변수에 저장할 수 있다.
const auxs = {increase, decrease};

// 3.함수의 매개변수로 혹은 반환값으로 사용할 수 있다.

function makeCounter(aux){
    let num = 0;
    return function(){
        num = aux(num);
        return num;
    };
};

const increaser = makeCounter(auxs.increase);
console.log(increaser()); //1
console.log(increaser()); //2

const decreaser = makeCounter(auxs.decrease);
console.log(decreaser()); //-1
console.log(decreaser()); //-2

function square(number){
    return number * number;
}
console.dir(square);

console.log(Object.getOwnPropertyDescriptors(square));