
// 일반적인 호출
function countdown(n) {
    for(let i = 0; i < 10; i++){
        console.log(n);
        n--;
    }
};
countdown(10); // 10 9 8 7 .... 1

//재귀 호출
function countdown2(n){
    if(n > 0){
        console.log(n);
        countdown2(n - 1);   
    }
    else{
        return;
    }
};
countdown2(10); // 10 9 8 7 ..... 1

//factorial

function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n - 1);
};

console.log(factorial(10)); // 3628800