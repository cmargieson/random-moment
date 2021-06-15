import moment from "moment";

const randomMoment = (startMoment, endMoment = moment()) =>
  moment(startMoment + Math.random() * (endMoment - startMoment));

module.exports = randomMoment;
