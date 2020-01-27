const memberArray = ['mei', 'mia', 'ann'];

// var i = 0;
// while (i < memberArray.length) {
//     console.log(memberArray[i]);

//     i += 1;
// }

var memberObject = {
    manager: 'mei',
    developer: 'mia',
    designer: 'ann'
};

for (var i in memberObject) {
    console.log(memberObject[i]);
}
