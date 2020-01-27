// __proto__ 를 사용한 상속은 자바스크립트 공식이 인정하는 방식이 아니며
// 유연하기 때문에 발생할 수 있는 문제들이 존재한다.
// 같은 효과를 낼 수 있으면서 javascript에서 제안하는 공식 방식이 Object.create()

var superObj = { superVal: 'superVal' };
// Object.create 메서드는 새로운 객체를 만드는 메서드.
// 이때 인자로 받는 객체를 부모로 하는 새로운 객체를 반환한다.
var subObj = Object.create(superObj);

// debugger; // 코드 실행을 멈추고 디버깅을 가능하게 하는 명령어