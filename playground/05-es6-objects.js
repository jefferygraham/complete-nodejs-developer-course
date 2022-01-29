// Object property shorthand

const username = 'Jeff';

const userAge = 45;

const user = {
  username,
  age: userAge,
  location: 'Capitol Heights, MD',
};

console.log(user);

// Object destructuring

const product = {
  label: 'Red Notebook',
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// const { label: productLabel, price, stock, salePrice, rating = 5 } = product;
// console.log(productLabel, price, stock, salePrice, rating);

const transaction = (type, { label, stock }) => {
  console.log(type);
  console.log(label);
  console.log(stock);
};

transaction('order', product);
