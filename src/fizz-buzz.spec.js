import FizzBuzz from "./fizz-buzz.js";

it("Given the numbers 1,15 are supplied FizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15", () => {
  const array = new FizzBuzz().generate(1, 15);
  expect(array).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});

it("Given the numbers 1,100 are supplied FizzBuzz will produce an array : 1,2,3,4,5,6,7,8,9,10 (and on to 100)", () => {
  const array = new FizzBuzz().generate(1, 100);
  expect(array[0]).toBe(1);
  expect(array[99]).toBe("Buzz");
});

it("Should change multiples of 3 to Fizz", () => {
  const array = new FizzBuzz().generate(1, 5);
  expect(array[2]).toBe("Fizz");
});

it("Should change multiples of 5 to Buzz", () => {
  const array = new FizzBuzz().generate(1, 5);
  expect(array[4]).toBe("Buzz");
});

it("Should change multiples of 3 and 5 to FizzBuzz", () => {
  const array = new FizzBuzz().generate(1, 15);
  expect(array[14]).toBe("FizzBuzz");
});
