// setTimeout(() => {
//   console.log('2 seconds');
// }, 2000);

// const names = ['Jeff', 'Jess', 'Andy', 'Max'];
// const shortNames = names.filter((name) => name.length <= 4);

// const geocode = (address, cb) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longtitude: 0,
//     };

//     cb(data);
//   }, 2000);
// };

// geocode('Philadelphia', (data) => {
//   console.log(data);
// });

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1, num2, cb) => {
  setTimeout(() => {
    let data = num1 + num2;

    cb(data);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
