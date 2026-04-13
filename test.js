// const words = ["cat", "dog", "cow", "mouse"];

// const strings = words.map((el, index) => {
//   const result = `${index + 1}. ${el}`;
//   return result;
// });
// console.log(strings);

const tasks = [
  {
    id: 1,
    text: "task1",
    complete: false,
  },
  {
    id: 2,
    text: "task2",
    complete: false,
  },
  {
    id: 3,
    text: "task3",
    complete: false,
  },
];

function getId(id) {
  const result = tasks.map((task) => {
    if (id !== task.id ) { 
    return task
    }
    else if (id === task.id) {
     return {...task, complete: !task.complete }
    }
  } )
  console.log(result);
}

// getId(2);
// getId(2)



// 1.Дан массив чисел. Используя map, создайте новый массив, в котором каждый элемент умножен на 2.

const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((number)=> {
return number*2
})

// console.log(newNumbers);
// Ожидаемый результат: [2, 4, 6, 8, 10]


// 2.Дан массив строк – имён. С помощью map приведите все имена к верхнему регистру.

const names = ['alice', 'bob', 'charlie'];

const bigNames = names.map((name) => {
  return name.toUpperCase()
})

// console.log(bigNames);
// Ожидаемый результат: ['ALICE', 'BOB', 'CHARLIE']

// 3.Дан массив объектов, каждый объект описывает пользователя (name, age).
// Сначала отфильтруйте тех, кому больше 18 лет, затем с помощью map получите массив их имён.


const users = [
  { name: 'Иван', age: 25 },
  { name: 'Мария', age: 17 },
  { name: 'Петр', age: 30 },
  { name: 'Анна', age: 16 }
];

const filtered = users.filter((user)=> {
  return user.age > 18
})
const requiredNames = filtered.map((user)=> {
return user.name
})
// console.log(requiredNames);

// Ожидаемый результат: ['Иван', 'Петр']

// 4. Дан массив строк. Сначала отфильтруйте строки, длина которых больше 3 символов.
// Затем с помощью map получите массив длин этих строк.

const words = ['cat', 'elephant', 'dog', 'tiger', 'hi'];

const filteredStrs = words.filter((word)=> {
return word.length > 3
})
const strInfo = filteredStrs.map((word)=> {
return word.length
})
// console.log(strInfo);
// Ожидаемый результат: [8, 5]  // длины слов 'elephant' и 'tiger'

// 5. Дан массив объектов товаров: { name, price }.
// Используя map, создайте новый массив, в котором у каждого товара цена уменьшена на 10%, но только для товаров дороже 1000 рублей.

const products = [
  { name: 'Ноутбук', price: 50000 },
  { name: 'Мышь', price: 800 },
  { name: 'Монитор', price: 12000 },
  { name: 'Коврик', price: 500 }
];

const filteredProducts = products.filter((product)=> {
return product.price >= 1000
})
const salePrice = filteredProducts.map((product)=> {
return product.price*0.9

})
console.log(salePrice);

// Ожидаемый результат: 
// [
//   { name: 'Ноутбук', price: 45000 },
//   { name: 'Монитор', price: 10800 }
// ]


