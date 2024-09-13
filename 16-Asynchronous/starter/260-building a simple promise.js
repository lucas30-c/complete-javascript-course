//  Promisfying setTimeout

const lotteryPromise = new Promise(function (resolve, reject) {
  console.log('Lottery draw is happening 🔮');
  setTimeout(() => {
    if (Math.random() >= 0.5) {
      // In the resolve method, we pass the fulfilled value of the promise, so that it can then later be consumed by the then method
      resolve('You WIN!');
    } else {
      // In the reject method, we pass the reason why the promise was rejected, so that it can then later be consumed by the catch method
      reject(new Error('You lost your money'));
    }
  }, 2000);
});

lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));

// Promisfying setTimeout
const wait = function (seconds) {
  return new Promise(function (resolve) {
    //  Resolve the promise after the specified number of seconds
    setTimeout(resolve, seconds * 1000);
  });
};

wait(2)
  .then(() => {
    console.log('I waited for 2 seconds');
    return wait(1);
  })
  .then(() => {
    console.log('I waited for 1 second');
  });

wait(1)
  .then(() => {
    console.log('1 second passed');
    return wait(1);
  })
  .then(() => {
    console.log('2 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('3 seconds passed');
    return wait(1);
  })
  .then(() => {
    console.log('4 seconds passed');
  });
