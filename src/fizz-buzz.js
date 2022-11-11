export default class FizzBuzz {
  generate = (start, end) => {
    const returnArr = [];
    for (let i = start; i <= end; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        returnArr.push("FizzBuzz");
      } else if (i % 3 === 0) {
        returnArr.push("Fizz");
      } else if (i % 5 === 0) {
        returnArr.push("Buzz");
      } else {
        returnArr.push(i);
      }
    }
    return returnArr;
  };
}
