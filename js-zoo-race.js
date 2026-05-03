function animal(name, maxSpeed, maxSpeedRange, midSpeed, midSpeedRange, speed, distance) {
  const time = distance <= maxSpeedRange
    ? distance / maxSpeed
    : distance <= maxSpeedRange + midSpeedRange
    ? maxSpeedRange / maxSpeed + (distance - maxSpeedRange) / midSpeed
    : maxSpeedRange / maxSpeed + midSpeedRange / midSpeed + (distance - maxSpeedRange - midSpeedRange) / speed;

  return new Promise(res => setTimeout(() => res(name), time));
}

function zooRace(animals) {
  return Promise.race(animals);
}

globalThis.animal = animal;
globalThis.zooRace = zooRace;
