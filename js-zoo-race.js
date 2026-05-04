// Create the animal function with name, speeds, ranges, and distance
function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  // Calculate the time needed to finish the race
  const time = distance <= maxSpeedRange

    // If distance is within max speed range, use only max speed
    ? distance / maxSpeed

    // Otherwise, check if distance fits within max speed range plus mid speed range
    : distance <= maxSpeedRange + midSpeedRange

    // Use max speed for the first part, then mid speed for the remaining part
    ? maxSpeedRange / maxSpeed + (distance - maxSpeedRange) / midSpeed

    // Use max speed, then mid speed, then fallback speed for the remaining distance
    : maxSpeedRange / maxSpeed + midSpeedRange / midSpeed + (distance - maxSpeedRange - midSpeedRange) / speed;

  // Return a Promise that resolves with the animal name after the calculated time
  return new Promise(res => setTimeout(() => res(name), time));
}

// Create the zooRace function that receives an array of animal Promises
function zooRace(animals) {
  // Return the first Promise that finishes, which means the race winner
  return Promise.race(animals);
}

// Make the animal function visible to the website tester
globalThis.animal = animal;

// Make the zooRace function visible to the website tester
globalThis.zooRace = zooRace;
