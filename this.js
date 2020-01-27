var mia = {
    name: 'mia',
    first: 20,
    second: 10,
    sum: function (first, second) {
        return first + second;
    }
}
console.log('====================================');
// 이 경우 mia 객체가 이미 내부적으로 알고 있는 정보를 한번 더 불러주어야 하는 비효율성이 있다.
console.log(mia.sum(mia.first, mia.second));
console.log('====================================');

var mia = {
    name: 'mia',
    first: 20,
    second: 10,
    sum: function () {
        return this.first + this.second;
    }
}

// this는 '나' 가 될 수 있는 모든 객체를 지칭하는 대명사이자 약속된 키워드.
// 객체에서의 this는 메서드 혹은 변수가 속하는 객체를 가르키도록 약속된 특수한 예약어이다.
console.log('====================================');
console.log(mia.sum());
console.log('====================================');