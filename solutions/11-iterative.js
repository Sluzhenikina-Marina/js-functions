const smallestDivisor = (num) => {
  // BEGIN
  if (num % 2 == 0) return 2;

  if (num === 1) {
    return 1;
  }

  for (let i = 3; i <= num; i++) {
    let check = num % i;
    if (check == 0) {
        return i;
    }
  }
  return num;
  // END
};

export default smallestDivisor;
