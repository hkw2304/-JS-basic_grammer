
// Symbol.iterator : arguments객체를 순회 가능 자료구조인 이터러블로 만들기 위한 프로퍼티.

function multiply(x, y){
    const iterator = arguments[Symbol.iterator]();

    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    console.log(iterator.next());
    return x * y;
};

multiply(1,2);


