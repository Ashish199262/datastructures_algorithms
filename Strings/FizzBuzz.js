fizzBuzz = (n) => {
  let logToBePrinted = '';
  while (n > 0) {
    if (n % 3 === 0 && n % 5 === 0)
      logToBePrinted = 'fizzbuzz';
    else if (n % 5 === 0)
      logToBePrinted = 'buzz';
    else if (n % 3 === 0)
      logToBePrinted = 'fizz';
    else logToBePrinted = n;

    console.log(`${logToBePrinted}\n`);
    n--;
  }
}

fizzBuzz(15);