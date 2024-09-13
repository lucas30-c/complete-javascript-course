console.log('Test starts');

setTimeout(() => {
  console.log('0 seconds timer');
}, 0); // 宏任务
// 微任务
// You cannot guarantee the time in which a setTimeout will run, but you can guarantee the order in which the promises will run
Promise.resolve('Resolved promise 1').then(res => console.log(res));

Promise.resolve('Resolved promise 2').then(res => {
  for (let i = 0; i < 2000000000; i++) {}
  console.log(res);
});
console.log('Test ends');

/*
  Test starts
  Test ends
  Resolved promise 1
  Resolved promise 2
  0 seconds timer
*/
