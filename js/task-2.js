function makeArray(firstArray, secondArray, maxLength) {
  // 1. Створюємо новий масив, який містить усі елементи з firstArray,
  // а потім усі елементи з secondArray.
  // Використовуємо метод concat() для об'єднання масивів.
  const newArray = firstArray.concat(secondArray);

  // 2. Перевіряємо, чи перевищує кількість елементів у новому масиві maxLength.
  if (newArray.length > maxLength) {
    // Якщо перевищує, повертаємо копію масиву з довжиною maxLength елементів.
    // Використовуємо метод slice(0, maxLength).
    return newArray.slice(0, maxLength);
  }

  // 3. В іншому випадку, повертаємо весь новий масив.
  return newArray;
}

// Перевірка коректності роботи
console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []