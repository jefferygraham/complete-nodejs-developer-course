// setTimeout(() => {
//   console.log('2 seconds have passed.');
// }, 2000);

// const names = ['Jeff', 'Jelani', 'Maximilien'];
// const shortNames = names.filter((name) => name.length <= 4);

// const geoCode = (address, cb) => {
//   setTimeout(() => {
//     const data = {
//       lat: 0,
//       long: 0,
//     };
//     cb(data);
//   }, 2000);
// };

// geoCode('Philadelphia', (data) => {
//   console.log(data);
// });

const add = (num1, num2, cb) => {
  setTimeout(() => {
    let sum = num1 + num2;

    cb(sum);
  }, 2000);
};

add(1, 4, (sum) => {
  console.log(sum); // Should print: 5
});
