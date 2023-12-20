

/*
    super 호출 시 부모클래스의 생성자를 호출
    자식 클래스에서 메서드 오버로딩을 하면 자동적으로 부모클래스의 생성자한테 전달된다.
*/

/*
class Base{
    constructor(a, b){
        this.a = a;
        this.b = b;
    }
}

class Derived extends Base{
    // 암묵적으로 생성자와 슈퍼가 정의된다.
}

const derived = new Derived(1,2);
console.log(derived);
*/

class Base{}

class Derived extends Base{
    constructor(){
        // 자식에서 생성자를 호출 시 super()를 선언해야 한다.
        // 자식에서 this를 호출할려면 super()를 먼저 선언해야 한다.
        super();
        this.a = 1;
        console.log(`constructor call`);
    }
}

const derived = new Derived();
const me = new Base();
