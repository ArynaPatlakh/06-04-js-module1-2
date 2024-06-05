// debugger;
// function checkStorage(available, ordered) {
//   if (ordered === 0) {
//     return "There are no products in the order!";
//   } else if (ordered > available) {
//     return "Your order is too large, there are not enough items in stock!";
//   } else {
//     return "The order is accepted, our manager will contact you";
//   }
// }

// checkStorage(200, 100);
// checkStorage(200, 250);
// checkStorage(150, 0);

// =============================================
// let link = 'https://my-site.com/about'
// console.log(link);

// if (!link.endsWith('/')) {
//   link += '/';
// }
// console.log(link)

//*===============================================

// let url = "https://somesite-my-site.com/about";
// if (!url.endsWith("/") && url.includes("my-site")) {
//   url += "/";
// }
// console.log(url);

//===============================================
// debugger
// const start = 6;
// const end = 17;

// let number;

// for (let i = start; i <= end; i++) {
//   if (i % 5 === 0) {
//     number = i;
//     break;
//   }
// }
// console.log(number);

//*-----------------------------------------------------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   let array = message.split(" ");
//   let sum = 0;
//   for (let i = 0; i < array.length; i++) {
//     sum += pricePerWord;
//   }
//   console.log(sum);
// }

// calculateEngravingPrice("JavaScript is in my blood", 10);

//*-----------------------------------------------------------------------------------------------------

// function getSlice(array, value) {
//   const newArray = array.indexOf(value);
//   let secondArray = [];

//   if (newArray !== -1) {
//     secondArray = array.slice(0, newArray + 1);
//     return secondArray;
//   } else {
//     return secondArray;
//   }
// }

// getSlice(["Mango", "Poly", "Ajax"], "Polly");

//*-----------------------------------------------------------------------------------------------------

// function createArrayOfNumbers(min, max) {
//   const newArray = [];
//   for (let i = min; i <= max; i++) {
//     newArray.push(i);
//   }
//   return newArray;
// }

// createArrayOfNumbers(1, 3);

//*-----------------------------------------------------------------------------------------------------

// function calculateTotalPrice(order) {
//   let total = 0;
//     for (let i = 0; i <= order.length -1 ; i++) {
//         total += order[i]
//   }
//   console.log(total)
// }
// calculateTotalPrice([12, 85, 37, 4]); //138

//*-----------------------------------------------------------------------------------------------------

// function getEvenNumbers(start, end) {
//     let sum = [];
//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             sum.push(i)
//             console.log(sum)
// }
//     }
//     return sum;
// }
// getEvenNumbers(2, 5);

//*-----------------------------------------------------------------------------------------------------

// function checkStorage(storage, item) {
//     let clear = item.toLowerCase();
//     if (storage.includes(clear)) {
//         return `${clear} is available to order!`;
//     } else return "Sorry! We are out of stock!";
// }

// checkStorage(["apple", "plum", "pear"], "plUm")

//*-----------------------------------------------------------------------------------------------------

// function getCommonElements(array1, array2) {
//   let full = [];
//   for (let i = 0; i < array1.length; i++) {
//     if (array2.includes(array1[i])) {
//       full.push(array1[i]);
//     }
//   }
//   return full;
// }

// console.log(getCommonElements([1, 2, 3, 4], [2, 4]));

//*-----------------------------------------------------------------------------------------------------

// function calculateTotalPrice(order) {
//     let sum = 0;
//     for (const item of order) {
//         sum += item
//     }
//     return sum;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));

//*-----------------------------------------------------------------------------------------------------

// function calculateTotal() {
//   const args = Array.from(arguments);

//   let sum = 0;
//   for (const num of args) {
//     sum += num;
//   }

//   return sum / args.length;
// }
// console.log(calculateTotal(3, 6, 7, 8, 9));

//*-----------------------------------------------------------------------------------------------------

// function getCommonElements() {
//   const args = Array.from(arguments);
//   const newArray = [];

//   for (const number of args) {
//     if (number % 2 === 0) {
//       newArray.push(number);
//     }
//   }
//   return newArray;
// }
// console.log(getCommonElements(2, 6, 4, 5, 3, 5, 78, 33, 23, 45, 67, 68, 9, 0));
// console.log(getCommonElements(45, 8, 4, 2, 4, 65, 7, 8));
// console.log(getCommonElements(45, 8, 64, 123, 687, 9675, 4, 789, 564, 65));

//*-----------------------------------------------------------------------------------------------------

// function getPositiveNumber() {
//   const args = Array.from(arguments);
//   const positive = [];
//   for (const good of args) {
//     if (good >= 0) {
//       positive.push(good);
//     }
//   }
//   return positive;
// }

// console.log(getPositiveNumber(-3, -6, 45, -56, -9, 346, 0));
//*-----------------------------------------------------------------------------------------------------

// const apartment = {
//   imgUrl: "",
//   descr: "Spacious apartment in the city center",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
//   owner: {
//     name: "Henry",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags = ["premium", "promoted", "top", "trusted"];

// console.log(apartment.tags);

//*-----------------------------------------------------------------------------------------------------

// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (const color of colors) {
//     hexColors.push(color.hex);
//     console.log(hexColors)
//     rgbColors.push(color.rgb);
//     console.log(rgbColors)
// }
// console.log(hexColors)
// console.log(rgbColors)

//*-----------------------------------------------------------------------------------------------------

// function getProductPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   for (const product of products) {
//     if (product.name === productName) {
//       return product.price;
//     } else return null;
//   }
// }

// console.log(getProductPrice("Radar"));

//*-----------------------------------------------------------------------------------------------------

// function getAllPropValues(propName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   const arr = [];

//   for (const product of products) {
//     const keys = Object.keys(product);
//     for (const key of keys) {
//       if (propName === key) {
//         arr.push(product[key]);
//       }
//     }
//   }

//   return arr;
// }

// console.log(getAllPropValues("name"));

//*-----------------------------------------------------------------------------------------------------

// function calculateTotalPrice(productName) {
//   const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
//   ];

//   let sum = 0;
//   for (const product of products) {
//     if (Object.values(product).includes(productName)) {
//       sum = product.price * product.quantity;
//       return sum;
//     }
//     return `Product ${product.name} not found!`;
//   }
// }

// console.log(calculateTotalPrice("Raar"));

//*-----------------------------------------------------------------------------------------------------
// function add(...args) {
//   let total = 0;
//   for (const arg of args) {
//     total += arg;
//   }
//   return total;
// }
// console.log(add(15, 27));
// console.log(add(12, 4, 11, 48));

//*-----------------------------------------------------------------------------------------------------
// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів,
// які більші за задане число.Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// - Перший параметр value повинен представляти задане число,
//   а решта аргументів повинні бути зібрані за допомогою синтаксису(...args)
// - Усередині функції ініціалізуй змінну для зберігання загальної суми
// - Потім пройдись по кожному аргументу за допомогою циклу
// - Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// - На завершення поверни загальну суму

// function addOverNum(value, ...args) {
//   let total = 0;
//   for (let arg of args) {
//     if (arg > value) {
//       total += arg;
//     }
//   }
//   return total;
// }

// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71

//*-----------------------------------------------------------------------------------------------------

// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().

// function getExtremeScores(scores) {
//     const best = Math.max(...scores);
//     const worst = Math.min(...scores);
//     const obj = {
//         best,
//         worst,
//     }
//     return obj

// }

// console.log(getExtremeScores([89, 64, 42, 17, 93, 51, 26]));
// console.log(getExtremeScores([19, 7, 4, 17, 81, 24]));

//*-----------------------------------------------------------------------------------------------------

// У змінних firstGroupScores, secondGroupScores і
// thirdGroupScores зберігаються результати тестування окремих груп.
// Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores) ;
// const worstScore = Math.min(...allScores);

// console.log(allScores)
// console.log(bestScore)
// console.log(worstScore)

//*-----------------------------------------------------------------------------------------------------

// В конструкторі можна створювати нові тести,
// для яких є налаштування за замовчуванням, які зберігаються
// у змінній defaultSettings.

// Під час створення тесту, усі або частину налаштувань можна перевизначити,
// користувацькі налаштування зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту,
// необхідно взяти налаштування за замовчуванням і поверх них
// застосувати перевизначені користувацькі налаштування.
// Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };

// const finalSettings = { ...defaultSettings, ...overrideSettings };
// console.log(finalSettings)

//!---------------------------------------------------------

// const numbers = [5, 10, 15, 20, 25];

// numbers.forEach(function (number, index) {
//   console.log(`Index ${index}, value ${number}`);
// });

//*-----------------------------------------------------------------------------------------------------

// function calculateTotalPrice(orderedItems) {
//   let totalPrice = 0;

//     orderedItems.forEach(function (orderedItems) {
//       totalPrice += orderedItems
//   });

//   return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); //138

//*-----------------------------------------------------------------------------------------------------

// function filterArray(numbers, value) {
//     let total = [];
//     numbers.forEach(function (numbers) {
//         if (numbers > value) {
//             total.push(numbers)
//         }
//     }
//     )
//     return total;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//*-----------------------------------------------------------------------------------------------------

// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));

//*-----------------------------------------------------------------------------------------------------

// function changeEven(numbers, value) {
//   let newArray = [];
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       newArray.push((number = number + value));
//     } else {
//       newArray.push(number);
//     }
//   });
//   return newArray;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10)); //[1, 12, 3, 14, 5]

//*-----------------------------------------------------------------------------------------------------

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// const planetsLengths = planets.map(planet => {
//     return planet.length
// });

// console.log(planetsLengths) // [5,4,5,7]

//*-----------------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const titles = books.map((book) => book.title);

// console.log(titles);

//*-----------------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism"],
//   },
// ];

// const genres = books.flatMap((book) => book.genres);

// console.log(genres)

//*-----------------------------------------------------------------------------------------------------
// const getUserEmails = (users) => {
//  return users.map(user => user.email)
// };

//*-----------------------------------------------------------------------------------------------------

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];

// const evenNumbers = numbers.filter((number) => number % 2 === 0);
// const oddNumbers = numbers.filter((number) => number % 2 !== 0);
// console.log(evenNumbers);
// console.log(oddNumbers);

//*-----------------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks)
// console.log(booksByAuthor)

//*-----------------------------------------------------------------------------------------------------

// const getUsersWithEyeColor = (users, color) => {
//   return users.filter((user) => user.eyeColor === color);
// };

//*-----------------------------------------------------------------------------------------------------

// const getUsersWithAge = (users, minAge, maxAge) => {
//    return  users.filter(user => user.age >= minAge && user.age <= maxAge)
// };

//*-----------------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
// ];
// const BOOK_TITLE = "The Dream of a Ridiculous Man";
// const AUTHOR = "Robert Sheckley";

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// console.log(bookByAuthor);
// console.log(bookWithTitle)

//*-----------------------------------------------------------------------------------------------------

// const getUserWithEmail = (users, email) => {
//   return users.find((user) => user.email === email);
// };

//*-----------------------------------------------------------------------------------------------------

// const isEveryUserActive = (users) => {return users.every(user => user.isActive === true)};

//*-----------------------------------------------------------------------------------------------------

// const isAnyUserActive = (users) => {
//   return users.some((user) => user.isActive === true);
// };

//*-----------------------------------------------------------------------------------------------------

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244,
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]

// const totalPlayTime = playtimes.reduce((previousPlayer, player) => {
//   return previousPlayer + player;
// }, 0);

// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);

//*-----------------------------------------------------------------------------------------------------

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];

// const totalAveragePlaytimePerGame = players.reduce((acc, player) => {
//   let result = player.playtime / player.gamesPlayed;
//   return acc + result;
// }, 0);

// console.log(totalAveragePlaytimePerGame);

//*-----------------------------------------------------------------------------------------------------

// const calculateTotalBalance = (users) => {
//   return users.reduce((acc, bal) => {
//     return acc + bal.balance;
//   }, 0);
// };
// console.log(calculateTotalBalance(users));

//*-----------------------------------------------------------------------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
// ];

// const ascendingReleaseDates = releaseDates.toSorted();

// const alphabeticalAuthors = authors.toSorted();

// console.log(ascendingReleaseDates)

//*-----------------------------------------------------------------------------------------------------

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];

// const ascendingReleaseDates = releaseDates.toSorted((a, b) => a - b);

// const descendingReleaseDates = releaseDates.toSorted((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

//*-----------------------------------------------------------------------------------------------------

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];

// const authorsInAlphabetOrder = authors.toSorted();

// const authorsInReversedOrder = authors.toSorted((a, b) => b - a);

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

//*-----------------------------------------------------------------------------------------------------
// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     rating: 7.94,
//   },
//   {
//     title: "Enemy of God",
//     author: "Bernard Cornwell",
//     rating: 8.67,
//   },
// ];

// const sortedByAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
//   firstAuthor.author.localeCompare(secondAuthor.author)
// );
// const sortedByReversedAuthorName = books.toSorted((firstAuthor, secondAuthor) =>
//   secondAuthor.author.localeCompare(firstAuthor.author)
// );
// const sortedByAscendingRating = books.toSorted((a, b) => a.rating - b.rating);
// const sortedByDescentingRating = books.toSorted((a, b) => b.rating - a.rating);

// console.table(sortedByAuthorName);
// console.table(sortedByReversedAuthorName);
// console.table(sortedByAscendingRating);
// console.table(sortedByDescentingRating);

//*-----------------------------------------------------------------------------------------------------

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;

// const names = books
//   .filter((book) => book.rating >= MIN_BOOK_RATING)
//   .map((book) => book.author)
//   .toSorted((firstName, secondName) =>
//     firstName.localeCompare(secondName)
//   );
// console.log(names);

//*-----------------------------------------------------------------------------------------------------

// const numbers = [1, 4, 3, 6, 7, 9, 3, 4];

// let total = 0;

// numbers.forEach(number => total += number)

// console.log(total)

//*-----------------------------------------------------------------------------------------------------

// const arr2 = [[[1, 2], 3, 4, 5]];
// const arr2New = arr2.flat(2)
// console.log(arr2New);
// console.log(arr2)
