
// 블록문이란? 0개 이상의 문을 중괄호로 묶은 것으로 코드 블록 또는 블록이라고 부른다.

// 보통 문의 끝에는 세미콜론(;)을 붙이는 것이 일반적이지만 불록문은 자체 종결성을 갖기 때문에 붙이지 않는다.

{
    var foo = 10;
}

var x = 1;
if(x < 10){
    x++;
}

function sum(a, b){
    return a + b;
}


foo : {
    console.log(1);
    break foo;
    console.log(2);
}

console.log("done!!")