function filterArray(numbers, value) {
  // 1. Створюємо порожній масив, у який будемо додавати підходящі числа.
  const filteredNumbers = [];

  // 2. Використовуємо цикл for...of для ітерації кожного елемента масиву numbers.
  for (const number of numbers) {
    // 3. Використовуємо умовний оператор if для перевірки.
    if (number > value) {
      // Якщо число більше за value, додаємо його до нового масиву.
      filteredNumbers.push(number);
    }
  }

  // 4. Повертаємо новий масив з підходящими числами як результат.
  return filteredNumbers;
}

// Перевірка коректності роботи
console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]