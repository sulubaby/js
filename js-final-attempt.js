// Create the required function with callback and retry count
function FinalAttempt(callback, count) {
  // Return a new async function that accepts any number of arguments
  return async (...args) => {
    // Loop from 0 until count is reached, meaning retry count times
    for (let i = 0; i < count; i++) {
      // Try to run the callback
      try {
        // Run callback with the given args and return result if it succeeds
        return await callback(...args);

        // Catch the error if callback fails
      } catch (err) {
        // If this was the last attempt, return the fail message
        if (i === count - 1) return "Final Attempt Fail";
      }
    }
  };
}

// Make the function visible to the website tester
globalThis.FinalAttempt = FinalAttempt;
