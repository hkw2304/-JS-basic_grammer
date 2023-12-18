class Animal{
    constructor(age, weigth){
        this.age = age;
        this.wrigth = weigth;
    }
    eat = function(){
        return 'eat';
    }
    move = function(){
        return 'move';
    }
}
class Bird extends Animal{
    fly = function(){
        return 'fly';
    }
}

const bird = new Bird(1, 5);
console.log(bird);
console.log(bird instanceof Animal);
console.log(bird instanceof Bird);

console.log(bird.eat());
console.log(bird.move());
console.log(bird.fly());


// 상속은 클래스 뿐만 아니라 생성자 함수도 상속을 받는다.

function Base(a){
    this.a = a;
}

class Derived extends Base{}

const derived = new Derived(1);
console.log(derived);