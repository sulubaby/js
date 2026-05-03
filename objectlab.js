// Create the required function with two inputs: objects and transforms
function mergeAndTransform(objects, transforms) {
  // Copy the first object into finalObject as the starting merged object
  let finalObject = { ...objects[0] };

  // Start the counter for new keys added during merging
  let keysAdded = 0;

  // Start the counter for keys that get overwritten during merging
  let keysOverwritten = 0;

  // Loop through all objects except the first one
  for (const obj of objects.slice(1)) {
    // Loop through every key inside the current object
    for (const key in obj) {
      // If the key already exists, count it as overwritten
      if (key in finalObject) keysOverwritten++;

      // If the key does not exist, count it as added
      else keysAdded++;

      // Add the new key or overwrite the existing key
      finalObject[key] = obj[key];
    }
  }

  // Apply each transform function one by one to finalObject
  finalObject = transforms.reduce((obj, fn) => fn(obj), finalObject);

  // Return the final answer in the required format
  return {
    // The object after merging and applying all transforms
    finalObject,

    // The number of transform functions used
    transformationsCount: transforms.length,

    // The number of new keys added during merging
    keysAdded,

    // The number of keys overwritten during merging
    keysOverwritten,
  };
}

// Make the function visible to the website tester
globalThis.mergeAndTransform = mergeAndTransform;
