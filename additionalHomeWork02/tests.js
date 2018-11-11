// Type your tests here
const expect = require('expect.js');
const {
    pickPeaks,
    whoIsNext
} = require('../additionalHomework02/functions');

describe('Additional lesson 2 ', () => {
    describe('task 1 pickPeaks', () => {
        it('should return the positions and the values of the peaks of a numeric array', () => {
        expect(
            pickPeaks([1, 2, 2, 2, 1])
        ).to.eql({
          pos: [1],
          peaks: [2]
        });
  
        expect(
            pickPeaks([3, 4, 5, 5, 5, 1])
        ).to.eql({
          pos: [2],
          peaks: [5]
        });

        expect(
            pickPeaks([3, 2, 1, 2, 3])
        ).to.eql({
          pos: [],
          peaks: []
        });

        expect(
            pickPeaks([3, 4, 5, 5, 5])
        ).to.eql({
          pos: [],
          peaks: []
        });

        expect(
            pickPeaks([3, 3, 3, 4, 5, 5, 5, 1])
        ).to.eql({
          pos: [4],
          peaks: [5]
        });
      });
    });

    describe('task 2 whoIsNext', () => {
        it('should return the positions and the values of the peaks of a numeric array', () => {
          expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1)).to.be('Sheldon');
          expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 9)).to.be('Leonard');
          expect(whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 19)).to.be('Sheldon');
          expect(whoIsNext(["Maria", "John", "Jack"], 4)).to.be('Maria');
          expect(whoIsNext(["Maria", "John", "Jack"], 7)).to.be('John');
          expect(whoIsNext(["Maria", "John", "Jack"], 20)).to.be('Jack');
        });
    });
});



