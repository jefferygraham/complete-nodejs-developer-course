// const square = function (num) {
//   return num * num;
// };

// const square = (num) => {
//   return num * num;
// };

// const square = (num) => num * num;

// console.log(square(2));

const event = {
  name: 'Birthday Party',
  guestList: ['Ronnie', 'Bobby', 'Ricky', 'Mike'],
  printGuestList() {
    console.log(`Guest list for ${this.name}`);
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending ${this.name}`);
    });
  },
};
event.printGuestList();
