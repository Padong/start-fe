console.log('app');


//creat
var todos = ['운동']
var todo = '게임';
todos.push(todo);
console.log(todos);

//read

todos.forEach(function(todo){

    console.log(todo);
});

//update
// var todos = ['운동', '게임']
// var updateTodo = '게임';
// var updateIndex = todos.findIndex(function(todo) {
//     return todo === updateTodo;
// });
// todos[updateIndex] = '공부';
// console.log(todos);

//delete
// var todos = ['운동', '공부', '목욕'];
// var deleteTodo = '공부';
// var deleteIndex = todos.findIndex(function(todo) {
//   return todo === deleteTodo;
// });
// todos.splice(deleteIndex, 1);
// console.log(todos);


// var isMan = false;
// if(isMan) {
//     console.log('1');
// }
// else if(!isMan && isHero){

// }
// else{
//     console.log('2')
// }

// 평균 구하기
const arr = [10, 20, 30, 40, 50, 60, 70, 100];

const result = arr.reduce(function add(sum, currValue) {
  return sum + currValue;
}, 0);
const average = result / arr.length;

document.writeln(average); 
