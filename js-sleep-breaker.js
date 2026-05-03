function sleepBreaker(delay, breaker) {
  const sleep = new Promise((res) => setTimeout(res, delay));

  const breakPromise = typeof breaker === "function" ? breaker() : breaker;

  if (breakPromise && typeof breakPromise.then === "function") {
    return Promise.race([sleep, breakPromise]);
  }

  return sleep;
}

globalThis.sleepBreaker = sleepBreaker;
