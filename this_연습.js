
function foo(){
    console.log(this); //global
}
foo();

const bar = {
    name : "giwon",
    age(){
        // 메서드로서의 this 호출 객체
        return this.name;
    }
}
console.log(bar.age());