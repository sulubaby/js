// Create an async function because the exercises return Promises
async function examGrader(timeout, exercises) {
  // Start the final grade at 0
  let grade = 0;

  // Start the total used time at 0
  let totalTime = 0;

  // Loop through each exercise one by one in order
  for (const exercise of exercises) {
    // Run the current exercise and wait for its result
    const result = await exercise();

    // If adding this exercise reaches or passes the timeout, stop the loop
    if (totalTime + result.time >= timeout) break;

    // Add this exercise time to the total time
    totalTime += result.time;

    // Add this exercise note to the final grade
    grade += result.note;
  }

  // Return the final grade after processing the allowed exercises
  return grade;
}

// Make the function visible to the website tester
globalThis.examGrader = examGrader;
