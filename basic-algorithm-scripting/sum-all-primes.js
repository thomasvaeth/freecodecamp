// Sum all the prime numbers up to and including the provided number.
function isPrime(testNum) {
  if (testNum === 1) {
    return false;
  }
  for (var i = 2; i <= testNum; i++) {
    if ((testNum % i === 0) && (i !== testNum)) {
      return false;
    }
  }
  return true;
}

function sumPrimes(num) {
  var sum = 0;
  for (var j = 0; j <= num; j++) {
    if (isPrime(j)) {
      sum += j;
    }
  }
  return sum;
}

sumPrimes(10);