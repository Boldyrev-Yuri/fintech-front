/**
 * Реализовать функцию, поведение которой аналогично поведению Promise.all,
 * которая возвращает в качестве результата rejected промис c первым reject value или resolve с массивом resolveValues,
 * в соответствущих исходному массиву промисов позициях, если не было ни одного промиса с reject.
 * @param {Array<Promise>} promises - массив с исходными промисами
 * @return {Promise}
 */
function promiseAll(promises) {
  const resultPromise = new Promise((resolve, reject) => {
    const resolveValues = [];
    const promisesLength = promises.length;
    let numberOfPromises = 0;

    for (let i = 0; i < promisesLength; i++) {
      promises[i]
        .then(value => {
          resolveValues[i] = value;
          numberOfPromises++;
          if (numberOfPromises === promisesLength) {
            resolve(resolveValues);
          }
        })
        .catch(error => reject(error));
    }
  });

  return resultPromise;
}

module.exports = promiseAll;
