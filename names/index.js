const peopleNames = require("../country/state/city/index.js");
//console.log(peopleNames);
const getFirstNames = require("../utilities/utils/index.js");
//console.log();
const getPeopleInCity = (peopleNames) => {
  return getFirstNames(peopleNames);
};

module.exports = getPeopleInCity;
