const fizzBuzz = require('./index');

test("1を渡すと文字列'1'を返す", () => {
  expect(fizzBuzz(1)).toBe('1');
});

test("2を渡すと文字列'2'を返す", () => {
  expect(fizzBuzz(2)).toBe('2');
});
