class Person {
    constructor(name, first, second) {
        this.name = name;
        this.first = first;
        this.second = second;
    }

    sum() {
        return this.first + this.second;
    }
}

// 위 객체에 추가적으로 average 기능을 추가하고 싶다.
// 하지만 몇몇 객체를 제외하고 Person 객체 대부분에서 average 기능을 사용할 일은 없다.

// 이런 경우에 상속을 써보자
class PersonPlus extends Person {
    avg() {
        return (this.first + this.second) / 2;
    }   
}

var miaPlus = new PersonPlus('MIA', 10, 20)

console.log('====================================');
console.log('miaPlus sum', miaPlus.sum());  // Person 객체의 메서드도 그대로 사용 가능
console.log('miaPlus avg', miaPlus.avg());
console.log('====================================');

