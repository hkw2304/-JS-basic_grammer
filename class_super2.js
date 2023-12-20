
class Rectangle{
    constructor(width, height){
        // 상속받은 자식을 가리킨다.
        console.log(this);
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width * this.height;
    }
    toString(){
        return `width = ${this.width}, height = ${this.height}`;
    }
}


class ColorRectangle extends Rectangle{
    constructor(width, height, color){
        // this를 호출하기전에는 반드시 super()먼저 선언
        super(width, height);
        this.color = color;
    }
    toString(){
        return super.toString() + `, color = ${this.color}`;
    }
}
const colorRectangle = new ColorRectangle(2, 4, 'red');
console.log(colorRectangle);

console.log(colorRectangle.getArea());
console.log(colorRectangle.toString());

