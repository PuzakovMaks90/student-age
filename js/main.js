let arr = [
    {name: 'Dima', age: 20},
    {name: 'Kolya', age: 10},
    {name: 'Ivan', age: 40},
    {name: 'Petya', age: 30},
];


//======function1======

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

console.log(getAverageAge(arr));


//======function2======

// function removeUser (userArr, userName) {
//     let user = userArr.findIndex(function(item) {
//         return item.name == userName;
//     });
//     return userArr.splice(user, 1);
// }

// console.log(removeUser(arr, 'Ivan'));
// console.log(arr)