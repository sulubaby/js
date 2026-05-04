// Create the required function with delay and breaker
function sleepBreaker(delay, breaker) {
  // Create a Promise that resolves after the given delay
  const sleep = new Promise((res) => setTimeout(res, delay));

  // If breaker is a function, run it; otherwise, use it directly
  const breakPromise = typeof breaker === "function" ? breaker() : breaker;

  // Check if breakPromise exists and behaves like a Promise
  if (breakPromise && typeof breakPromise.then === "function") {
    // Return whichever finishes first: the sleep or the breaker
    return Promise.race([sleep, breakPromise]);
  }

  // If there is no valid breaker Promise, return the normal sleep
  return sleep;
}

// Make the function visible to the website tester
globalThis.sleepBreaker = sleepBreaker;
