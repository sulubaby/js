function bubbleSortAnalyzer(a, comparator) {
  let iterations = 0;
  let swaps = 0;

  for (let i = 0; i < a.length - 1; i++) {
    for (let j = 0; j < a.length - 1 - i; j++) {
      iterations++;

      let left = a[j];
      let right = a[j + 1];

      if (comparator(left, right) > 0) {
        a[j] = right;
        a[j + 1] = left;
        swaps++;
      }
    }
  }

  return {
    sortedArray: a,
    iterations: iterations,
    swaps: swaps
  };
}
