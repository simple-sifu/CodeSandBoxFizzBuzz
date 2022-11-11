export default class FizzBuzz {
  generate = (start, end) => {
    const returnArr = [];
    for (let i = start; i <= end; i++) {
      returnArr.push(i);
    }
    return returnArr;
  };
}
