// 변수 : 하나의 값을 저장하기 위한 메모리 공간자체
// 변수를 사용하는 이유 : 메모리 주소를 통해 직접 접근하는 것은 치명적인 오류를 발생시킬 가능성이
// 매우 높고 동일한 코드가 실행될 때마다 메모리의 주소는 매번 변경이된다.

// 변수에 여러 개의 값을 저장하기 위한 방법
const userId = 1;
const userName = "Lee";

const user = {id: "i", userName: "Lee"};

const users = [
    {
        id: "1", name: "Lee",
        id: "2", name: "Kim"
    }
]