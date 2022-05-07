const fizzBuzz = require('./index');

test("1を渡すと文字列'1'を返す", () => {
  expect(fizzBuzz(1)).toBe('1');
});
