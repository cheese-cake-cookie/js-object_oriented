class Person {
    constructor (name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    // 클래스 내부에 선언한 메서드는 Person 객체가 함께 공유하는 메서드가 된다.
    sum() {
        return this.first + this.second;
    }
}

var kim = new Person('MIA', 10, 20);

// 특정 객체만 sum 함수를 다르게 동작하게 하고 싶다면? 다음과 같이 재정의 해주면 된다.
var lee = new Person('MIA', 10, 20);
lee.sum = function () {
    // new code
}
// prototype과 동일하게 javascript는 해당 객체에 sum 이라는 함수가 정의되어있는지를 먼저 확인함.

console.log('====================================');
console.log(kim);
console.log('====================================');