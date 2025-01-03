// Lesson: Writing your first tests
export function max(a, b) {
   return (a > b) ? a : b;
 
}

// Exercise
export function fizzBuzz(n) {
  if (n % 3 === 0 && n % 5 === 0) return 'FizzBuzz';
  if (n % 3 === 0) return 'Fizz';
  if (n % 5 === 0) return 'Buzz';
  return n.toString();
}

//TDD: Test-driven development (TDD) is a software development 
// method that involves writing tests before writing code.
//  The goal of TDD is to ensure that all code is thoroughly tested, 
// which leads to more reliable and higher quality code. 
export function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
