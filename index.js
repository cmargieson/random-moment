const moment = require("moment");

const randomMoment = (startMoment, endMoment = moment()) => {
  const random = moment(
    startMoment + Math.random() * (endMoment - startMoment)
  );
  return random;
};

export default randomMoment;
