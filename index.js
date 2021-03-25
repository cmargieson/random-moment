const moment = require("moment");

const randomMoment = (startMoment, endMoment = moment()) =>
  moment(startMoment + Math.random() * (endMoment - startMoment));

export default randomMoment;
