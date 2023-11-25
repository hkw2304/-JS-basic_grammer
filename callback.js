function repeat(n , f){
    for(let i = 0; i < n; i++){
        f(i);
    }
};

function logAll(i){
    console.log(i);
}

repeat(5, logAll);

//함수의 매개변수를 통해 다른 함수의 내부로 전달되는 함수이다.

//map

var arr = [1,2,3];
arr = arr.map(function(item){
    return item * 2;
});
console.log(arr); // 2 4 6

arr = [1,2,3];
arr = arr.filter(function(item){
    return item % 2;
});
console.log(arr); // 1 3

arr = [1,2,3];
arr = arr.reduce(function(arr, cur){
    return arr + cur;
});
console.log(arr);
