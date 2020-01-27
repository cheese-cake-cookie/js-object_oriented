console.log('====================================');
console.log(Math.floor(Math.random() * 10));
console.log('====================================');

var myMath = {
    PI: Math.PI,
    random: function () {
        return Math.random();
    },
    floor: function (val) {
        return Math.floor(val);
    }
}

console.log("myMath", myMath.floor(13.2));