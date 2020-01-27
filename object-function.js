var kim = {
    name: 'kim',
    first: 10,
    second: 20
};

var lee = {
    name: 'lee',
    first: 10,
    second: 20
};

function sum () {
    return (this.first + this.second);
}

// sum(); 과 동일하게 sum 함수를 실행시키는 방법에는
//sum.call(); 으로 가능 모든 함수들은 동일하게 call이라는 메소드를 가지고 있다. (자바스크립트에서는 함수조차도 객체이기 때문에 가능)

// sum.call(kim);
console.log(sum.call(kim));
// 위의 코드처럼 call을 사용해 실행된 함수는 call의 인자로 받은 객체 kim을 this로 갖는다.

// call 메서드는 첫번째 인자로 this로 사용될 argument 두번째 인자부터 함수의 인자로 사용될 파라미터를 받는다