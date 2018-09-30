/*=============================
=            РЕЛИЗ            =
=============================*/

/**
 * найдите минимум и максимум в любой строке
 * @param  {string} string входная строка(числа отделены от других частей строки пробелами или знаками препинания)
 * @return {{min: number, max: number}} объект с минимумом и максимумом
 * '1 и 6.45, -2, но 8, а затем 15, то есть 2.7 и -1028' => { min: -1028, max: 15 }
 */
function getMinMax(string) {
  let min, max;
  while (string.length > 0) {
    const x = parseFloat(string);
    if (!isNaN(x)) {
      if (min === undefined || min > x) {
        min = x;
      }
      if (max === undefined || max < x) {
        max = x;
      }
      string = string.substring(String(x).length, string.length)
    } else {
      string = string.substring(1, string.length)
    }
  }
  return {
    min: min,
    max: max
  }
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  if (x < 1) {
    return 'Входной параметр не может быть меньше 1';
  } else if (x < 3) {
    return 1;
  }
  return fibonacciSimple(x - 2) + fibonacciSimple(x - 1);
}

/* ============================================= */

/**
 * Напишите функцию для вычисления числа Фибоначчи с мемоизацией:
 * при повторных вызовах функция не вычисляет значения, а достает из кеша.
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciWithCache(x) {
  return x;
}

/* ============================================= */

/**
 * Напишите функцию printNumbers, выводящую числа в столбцах
 * так, чтобы было заполнено максимальное число столбцов при
 * минимальном числе строк.
 * Разделитель межу числами в строке - один пробел,
 * на каждое число при печати - отводится 2 символа
 * Пример работы: printNumbers(11, 3)
 *  0  4  8
 *  1  5  9
 *  2  6 10
 *  3  7 11
 * @param  {number} max  максимальное число (до 99)
 * @param  {number} cols количество столбцов
 * @return {string}
 */
function printNumbers(max, cols) {}

/* ============================================= */

/**
 * Реализуйте RLE-сжатие: AAAB -> A3B, BCCDDDEEEE -> BC2D3E4
 * @param  {string} value
 * @return {string}
 */
function rle(input) {
  let last_seen = input[0];
  let i = 1;
  let output = '';
  //for (let i = 1; i < input.length; i++) {
  while (i <= input.length) {
    //console.log(input[i]);
    let q = 1;
    while (input[i] === last_seen) {
      q++;
      i++;
    }
    if (q > 1) {
      output += last_seen;
      output += String(q);
      q = 1;
    } else {
      output += last_seen;
    }
    last_seen = input[i];
    i++;
  }
  return output;
}

module.exports = {
  getMinMax,
  rle,
  printNumbers,
  fibonacciSimple,
  fibonacciWithCache
};

/*=====  End of РЕЛИЗ  ======*/

/*========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
========================================*/

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {}

/*=====  End of НЕ ВОШЛО В РЕЛИЗ  ======*/
