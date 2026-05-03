function pipeline(initialValue, functions) {
  // Create an empty array to store the details of every step
  const steps = [];

  // Use reduce to go through each function one by one
  const finalValue = functions.reduce((currentValue, fn, index) => {
    // Run the current function using the current value
    const output = fn(currentValue);

    // Save the details of this step inside the steps array
    steps.push({
      // Store the position of the current function
      index: index,

      // Store the value before running the function
      input: currentValue,

      // Store the value after running the function
      output: output,
    });

    // Return the output so it becomes the input for the next function
    return output;

    // Start the reduce process using the initial value
  }, initialValue);

  // Return the final result and all recorded steps
  return {
    // The final value after all functions have finished
    finalValue: finalValue,

    // The array that contains every step's input and output
    steps: steps,
  };
}
