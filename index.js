function fizzBuzz(num) {
  if (typeof num !== 'number') {
    throw new Error;
  }
  const fizzbuzz = (num % 3 === 0 ? 'Fizz' : '') + (num % 5 === 0 ? 'Buzz' : '');
  if (fizzbuzz !== '') {
    return fizzbuzz;
  }
  return num.toString();
}

module.exports = fizzBuzz;
