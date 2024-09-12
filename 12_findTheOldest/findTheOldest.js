const findTheOldest = function(arr) {
  let oldestPerson = {};
  let oldestAge = 0;

  arr.forEach(person => {
    let deathYear = person.yearOfDeath === undefined ? new Date().getFullYear() : person.yearOfDeath;
    let age = deathYear - person.yearOfBirth;
    if (age > oldestAge) {
      oldestPerson = person;
      oldestAge = age;
    }
  });

  return oldestPerson;
};

// Do not edit below this line
module.exports = findTheOldest;
