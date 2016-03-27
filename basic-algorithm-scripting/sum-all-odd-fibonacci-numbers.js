// Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a Fibonacci number.
function sumFibs(num) {
  var i = 1;
  var j = 2;
  var k = 0;
  var sum = 2;
  while (k <= num ) {
    if (k % 2 === 1) sum = sum + k;
    k = i + j;
    i = j;
    j = k;
  }
  return sum;
}

sumFibs(4);