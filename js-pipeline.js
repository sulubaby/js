function pipeline(initialValue, functions) {
  const steps = [];

  const finalValue = functions.reduce((currentValue, fn, index) => {
    const output = fn(currentValue);

    steps.push({
      index: index,
      input: currentValue,
      output: output,
    });

    return output;
  }, initialValue);

  return {
    finalValue: finalValue,
    steps: steps,
  };
}
