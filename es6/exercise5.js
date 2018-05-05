// Complete the below questions using this array:
const array = [
  {
    username: "john",
    team: "red",
    score: 5,
    items: ["ball", "book", "pen"]
  },
  {
    username: "becky",
    team: "blue",
    score: 10,
    items: ["tape", "backpack", "pen"]
  },
  {
    username: "susy",
    team: "red",
    score: 55,
    items: ["ball", "eraser", "pen"]
  },
  {
    username: "tyson",
    team: "green",
    score: 1,
    items: ["book", "pen"]
  },

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
const bangArray = [];
array.forEach(obj => {
  let { username } = obj;
  bangArray.push(username + "!");
});
console.log(bangArray);

//Create an array using map that has all the usernames with a "? to each of the usernames
const questionableArray = array.map(obj => {
  let { username } = obj;
  return username + "?";
});
console.log('map', questionableArray);

//Filter the array to only include users who are on team: red
const redTeam = array.filter(obj => obj.team === "red")
console.log('filter', redTeam);

//Find out the total score of all users using reduce
const totalScore = array.reduce((acc, obj) => {
  return acc + obj.score;
}, 0);
console.log('totalScore', totalScore);

// (1), what is the value of i?
// (2), Make this map function pure:
const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map(num => num * 2);
console.log('newArray', newArray);

//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const loudItemsArray = array.map(obj => {
  tempObj = {...obj};
  tempObj.items = tempObj.items.map(item => item += "!");
  return tempObj;
})
console.log('loudItems', loudItemsArray);
