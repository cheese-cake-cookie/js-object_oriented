function Person (name ,first, second, thrid) {
    this.name = name;
    this.first = first;
    this.second = second;
}

// 프로토타입으로 선언된 메소드는 객체가 생성될 때마다 실행되지 않는다.
// 정의 또한 한번만 정의되기 때문에 메모리를 낭비하지 않는다.
// 프로토타입으로 선언한 메소드는 모든 객체가 공유해서 사용하게 됨

Person.prototype.sum = function () {
    return this.first + this.second;
}

var kim = new Person('MIA', 10, 20);

console.log('====================================');
console.log(kim.sum());
console.log('====================================');

// 특정한 객체의 메소드만 변경하여 사용하고 싶을 때는 아래와 같은 형태로 오버라이딩 또한 가능하다.
// - javascript는 메소드 실행 시 해당 객체가 그 메소드를 가지고 있는지 제일 먼저 확인한 다음 객체의 생성자의 프로토타입에 해당 메서드가 있는지 탐색한다.
kim.sum = function () {
    // new code
}
