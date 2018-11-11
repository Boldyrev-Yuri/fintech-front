/* =============================
=            РЕЛИЗ            =
============================= */

/**
 * Исправьте проблему с таймером: должны выводиться числа от 0 до 9.
 * Доп. задание: предложите несколько вариантов решения.
 */
function timer(logger = console.log) {
  for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      logger(i);
    }, 100);
  }
}

// Другой вариант исправления
function timer2(logger = console.log) {
  for (var i = 0; i < 10; i++) {
    setTimeout((function(nestedI) {
      return () => {
        logger(nestedI);
      };
    }(i)), 100);
  }
}

/*= ============================================ */

/**
 * Создайте собственную реализацию функции bind
 * @param {Function} func передаваемая функция
 * @param {any} context контекст
 * @param {Array<any>} args массив аргументов
 * @return {Function} функция с нужным контекстом
 */
function customBind(func, context, ...args) {
  return (...funcArgs) => {
    return func.apply(context, args.concat(funcArgs));
  };
}

/*= ============================================ */

/**
 * Напишите функцию sum, вычисляющую суммы подобным образом:
 * sum(1)(2)( ) // 3
 * sum(1)(2)(3)( ) // 6
 * sum :: Number -> sum
 * sum :: void -> Number
 */
function sum(x) {
  const answer = y => {
    if (typeof (y) === 'undefined') {
      return x;
    }
    return sum(x + y);
  };

  if (typeof (x) === 'undefined') {
    return 0;
  }
  return answer;
}

/*= ============================================ */

/**
 * Определите, являются ли строчки анаграммами (например, “просветитель” — “терпеливость”).
 * @param {string} first
 * @param {string} second
 * @return {boolean}
 */
function anagram(first, second) {
  const firstLength = first.length;

  if (firstLength !== second.length) {
    return false;
  }
  for (let i = 0; i < firstLength; i++) {
    const index = second.indexOf(first[i]);

    if (index !== -1) {
      delete second[index];
    } else {
      return false;
    }
  }
  return true;
}

/*= ============================================ */

/**
 * Сократите массив до набора уникальных значений
 * [1,1, 2, 6, 3, 6, 2] → [1, 2, 3, 6]
 * @param {Array<number>} исходный массив
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getUnique(arr) {
  const outputArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (outputArr.indexOf(arr[i]) === -1) {
      outputArr.push(arr[i]);
    }
  }
  return outputArr.sort((a, b) => a - b);
}

/**
 * Найдите пересечение двух массивов
 * [1, 3, 5, 7, 9] и [1, 2, 3, 4] → [1, 3]
 * @param {Array<number>, Array<number>} first, second исходные массивы
 * @return {Array<number>} массив уникальных значений, отсортированный по возрастанию
 */
function getIntersection(first, second) {
  const findIntersection = (...restArrays) => {
    const arr = [];

    for (let i = 0; i < restArrays[0].length; i++) {
      if (restArrays[1].indexOf(restArrays[0][i]) !== -1) {
        arr.push(restArrays[0][i]);
      }
    }
    return arr.sort((a, b) => a - b);
  };

  return first.length >= second.length ?
    findIntersection(second, first) :
    findIntersection(first, second);
}

/* ============================================= */

/**
 * Две строки называются изоморфными, когда в строке A можно заменить
 * конкретный символ на любой другой для получения строки B. (Расстояние Левенштейна, при возможных мутациях
 * ограничивающихся заменой символа - отличается на 1).
 * Отдельно стоит отметить что строка изоморфна самой себе.
 * Порядок символов должен остаться неизменным. Каждый
 * последовательный символ в строке A сравнивается с
 * каждым последовательным символов в строке B.
 *
 * @param  {string} left
 * @param  {string} right
 * @return {boolean}
 */
function isIsomorphic(left, right) {
  let charReplaced = false;
  const leftLength = left.length;

  if (leftLength !== right.length) {
    return false;
  }
  for (let i = 0; i < leftLength; i++) {
    if (left[i] !== right[i] && !charReplaced) {
      charReplaced = true;
    } else if (charReplaced) {
      return false;
    }
  }
  return true;
}

module.exports = {
  timer,
  customBind,
  sum,
  anagram,
  getUnique,
  getIntersection,
  isIsomorphic
};
