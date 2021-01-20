import users from './users.js'

// Задание 1
// Получить массив имен всех пользователей(поле name).

const getUserNames = array => array.map(({name}) => name);

console.log(getUserNames(users));


// Задание 2
// Получить массив объектов пользователей по цвету глаз (поле eyeColor).

const getUsersWithEyeColor = (array, color) => array.filter(({eyeColor}) => eyeColor === color);

console.log(getUsersWithEyeColor(users, 'blue'));


// Задание 3
// Получить массив имен пользователей по полу (поле gender).

const getUsersWithGender = (array, gender) => array
    .filter(array => array.gender === gender)
    .map(({name}) => name);

console.log(getUsersWithGender(users, 'male'));


// Задание 4
// Получить массив только неактивных пользователей (поле isActive).

const getInactiveUsers = array => array.filter(({ isActive }) => isActive === false);

console.log(getInactiveUsers(users)); 


// Задание 5
// Получить пользоваля (не массив) по email (поле email, он уникальный).

const getUserWithEmail = (array, email) => array.find(user => user.email === email);

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); 
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); 


// Задание 6
// Получить массив пользователей попадающих в возрастную категорию от min до max лет (поле age).

const getUsersWithAge = (array, min, max) => array.filter(({ age }) => age > min && age < max);

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));


// Задание 7
// Получить общую сумму баланса (поле balance) всех пользователей.

const calculateTotalBalance = array => array.reduce((totalBalance, user) => totalBalance + user.balance, 0);

console.log(calculateTotalBalance(users)); // 20916


// Задание 8
// Массив имен всех пользователей у которых есть друг с указанным именем.

const getUsersWithFriend = (array, friendName) => array.filter(({ friends }) => friends
    .includes(friendName))
    .map(({name}) => name);

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]


// Задание 9
// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)

const getNamesSortedByFriendsCount = array => [...array].sort((a,b) => a.friends.length - b.friends.length).map(({name}) => name);

console.log(getNamesSortedByFriendsCount(users));


// Задание 10
// Получить массив всех умений всех пользователей (поле skills), при этом не должно быть повторяющихся умений и они должны быть отсортированы в алфавитном порядке.

const getSortedUniqueSkills = array => array
    .flatMap(user => user.skills)
    .filter((value, index, array) => array.indexOf(value) === index)
    .sort();

console.log(getSortedUniqueSkills(users));
