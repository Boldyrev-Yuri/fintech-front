/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.race,
 * которая возвращает в качестве результата промис c первым resolve value или reject value в массиве исходных промисов
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */

function promiseRace(promises) {
  const resultPromise = new Promise((resolve, reject) => {
    promises.reduce((total, current) =>
      current
        .then(value => resolve(value))
        .catch(error => reject(error))
      , Promise.resolve(null));
  });

  return resultPromise;
}

module.exports = promiseRace;
