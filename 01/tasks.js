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
  return string;
}

/* ============================================= */

/**
 * Напишите рекурсивную функцию вычисления чисел Фибоначчи
 * @param {number} x номер числа
 * @return {number} число под номером х
 */
function fibonacciSimple(x) {
  return x;
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
function rle(input) {}

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

  while (answer !== num) {
    answer = parseInt(window.prompt(`${s} Введите число: `, 0), 10);
    if (isNaN(answer)) {
      s = 'Это не число!';
    } else if (answer < num) {
      s = 'Cлишком мало. Попробуйте еще раз.';
    } else if (answer > num) {
      s = 'Cлишком много. Попробуйте еще раз.';
    }
  }
  alert('В точку!');
}

/**
 * По завершению игры пользователю предлагается сыграть еще раз. После каждого тура выводится последний и лучший результаты.
 */
function guessNumberB() {
  let lastPlayerScore = 0;
  let bestPlayerScore = Infinity;
  let anotherGame = true;

  function playGame() {
    const num = Math.floor(Math.random() * 100 + 1);
    let answer = 0;
    let s = '';
    let i = 0;

    while (answer !== num) {
      answer = parseInt(window.prompt(`${s} Введите число: `, 0), 10);
      if (isNaN(answer)) {
        s = 'Это не число!';
      } else if (answer < num) {
        s = 'Cлишком мало. Попробуйте еще раз.';
      } else if (answer > num) {
        s = 'Cлишком много. Попробуйте еще раз.';
      }
      i++;
    }
    lastPlayerScore = i;
    bestPlayerScore = Math.min(bestPlayerScore, i);
    alert(`В точку! Ваш последний результат: ${lastPlayerScore}. Ваш лучший: ${bestPlayerScore}.`);
    return confirm('Хотите сыграть еще раз?');
  }

  while (anotherGame) {
    anotherGame = playGame();
  }
}

/* =====  End of НЕ ВОШЛО В РЕЛИЗ  ====== */
