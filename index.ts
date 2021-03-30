import moment, { Moment } from "moment";

const randomMoment = (
  startMoment: Moment,
  endMoment: Moment = moment()
): Moment => moment(startMoment + Math.random() * (endMoment - startMoment));

module.exports = randomMoment;
