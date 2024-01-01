/*
이터러블 : 자료를 반복할 수 있는 객체를 말한다. ex ) 배열
           이터러블 프로토콜을 준수한 객체
           이터레이터(Symbol.iterator) 메서드를 반환하는 객체
           반환된 이터레이터는 next 메서드를 갖는다.
           next : 이터러블의 각 요소를 순회하기 위한 포인터 역할
                  순회하면서 순차적으로 결과를 이터레이터 리절트 객체를 반환
                  프로퍼티(value : 현재 값, done : 순회 완료 여부)

*/
// 배열은 이터러블 프로토콜을 준수한다.
const arr = [1,2,3];
for(item of arr){
    console.log(item);
}


// 일반 객체는 이터러블이 아니라서 이터레이터 메서드를 사용할 수 없다.
/*
const obj = {
    a: 1,
    b: 2
};
for(item of obj){
    console.log(item); //TypeError: obj is not iterable
}
*/


const iterator = arr[Symbol.iterator]();
console.log(iterator.next()); //{value: 1, done: false}
console.log(iterator.next()); //{value: 2, done: false}
console.log(iterator.next()); //{value: 3, done: false}
console.log(iterator.next()); //{value: undefined, done: true}