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