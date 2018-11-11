/* =============================
=            РЕЛИЗ            =
============================= */

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
      if (typeof(min) === 'undefined' || min > x) {
        min = x;
      }
      if (typeof(max) === 'undefined' || max < x) {
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
let cache = {1: 1, 2: 1};
function fibonacciWithCache(x) {
    if (!cache[x]) {
      if (x < 1) {
        return 'Входной параметр не может быть меньше 1';
      } else {
        cache[x] = fibonacciWithCache(x - 2) + fibonacciWithCache(x - 1);
      }
    }
    return cache[x];
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
function printNumbers(max, cols) {
  let rows;
  if ((max + 1) < cols) { //если входное кол-во столбцов слишком большое
    cols = max + 1; 
    rows = 1;
  } else {
    rows = Math.floor((max + 1) / cols); //округляем вниз
    //если есть остаток от деления, то понадобится еще одна строка:
    if ((max + 1) % cols > 0) {
      rows += 1;
    }
  }
  let string = '';
  for (let i = 0; i < rows; i++) {
    //сдвиг для случаев, когда не все строки заполнены полностью
    const shift = i >= (rows - ((rows * cols) - max - 1));
    for (let j = 0; j < cols - shift; j++) {
      //вычисляем очередное число
      const num = i + j * rows;
      string += ' '.repeat(2 - String(num).length) 
      + String(num) 
      + ' '.repeat(1 - (j === (cols - shift - 1)));
    }
    string += '\n'.repeat(1 - (i  === (rows - 1)));
  }
  return string;
}

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
  while (i <= input.length) {
    let q = 1;
    while (input[i] === last_seen) {
      q++;
      i++;
    }
    output += last_seen;
    if (q > 1) {
      output += String(q);
      q = 1;
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

/* =====  End of РЕЛИЗ  ====== */

/* ========================================
=            НЕ ВОШЛО В РЕЛИЗ            =
======================================== */

/**
 * Игра "угадайка". Компьютер загадывает случайное целое число от 1 до 100,
 * пользователь вводит числа в консоль.
 * На каждое число компьютер отвечает "слишком мало", "слишком много", "в точку!".
 * Для общения с пользователем используйте window.prompt.
 */

/**
 * Игра продолжается, пока пользователь не угадает. После этого выводит в консоль результат.
 */
function guessNumberA() {
  const num = Math.floor(Math.random() * 100 + 1);
  let answer = 0;
  let s = '';
  let i = 0;

  while (answer !== num) {
    answer = window.prompt(`${s} Введите число: `, 0);
    if (answer === null) {
      return answer;
    }
    answer = parseInt(answer, 10);
    if (isNaN(answer)) {
      s = 'Это не число!';
    } else if (answer < num) {
      s = 'Cлишком мало. Попробуйте еще раз.';
    } else if (answer > num) {
      s = 'Cлишком много. Попробуйте еще раз.';
    }
    i++;
  }
  alert('В точку!');
  return i;
}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {
  let lastPlayerScore = 0;
  let bestPlayerScore = Infinity;
  let anotherGame = true;

  while (anotherGame) {
    lastPlayerScore = guessNumberA();
    if (lastPlayerScore === null) {
      return;
    }
    bestPlayerScore = Math.min(bestPlayerScore, lastPlayerScore);
    alert(`Ваш последний результат: ${lastPlayerScore}. Ваш лучший: ${bestPlayerScore}.`);
    anotherGame = confirm('Хотите сыграть еще раз?');
  }
}

/* =====  End of НЕ ВОШЛО В РЕЛИЗ  ====== */
