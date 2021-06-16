const moment = require("moment");

const { isBetween, isBefore, isAfter } = require("moment");

const randomMoment = require("./index");

test("moment is between 2020-12-25 and today", () => {
  expect(randomMoment(moment("2020-12-25")).isBetween("2020-12-25")).toBe(true);
});

test("moment is between 1990-10-01 and 2002-08-28", () => {
  expect(
    randomMoment(moment("1990-10-01"), moment("2002-08-28")).isBetween(
      "1990-10-01",
      "2002-08-28"
    )
  ).toBe(true);
});

test("moment is not before 1995-11-25 or after 1995-11-26", () => {
  expect(
    randomMoment(moment("1995-11-25"), moment("1995-11-26")).isBefore(
      "1995-11-25"
    )
  ).toBe(false);

  expect(
    randomMoment(moment("1995-11-25"), moment("1995-11-26")).isAfter(
      "1995-11-26"
    )
  ).toBe(false);
});

// test("throws an error", () => {
//   expect(() => randomMoment(1, "apples")).toThrow();
// });

// test("throws an error", () => {
//   expect(() =>
//     randomMoment(moment("2002-08-28"), moment("1990-10-01"))
//   ).toThrow();
// });
