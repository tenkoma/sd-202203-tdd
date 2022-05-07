function fizzBuzz(num) {
  if (typeof num !== 'number') {
    throw new Error;
  }
  const fizzbuzz = (canDivideBy(num, 3) ? 'Fizz' : '') + (canDivideBy(num, 5) ? 'Buzz' : '');
  if (fizzbuzz !== '') {
    return fizzbuzz;
  }
  return num.toString();
}

function canDivideBy(subject, divider) {
  return subject % divider === 0;
}

module.exports = fizzBuzz;
