# Random Moment

**Random Moment** returns a random Moment (date + time) between two other Moments.

## How to Use

```console
npm install random-moment
```

```jsx
import moment from "moment";
import randomMoment from "random-moment";

const startDate = moment("20-06-1995 ", "DD-MM-YYYY");
const endDate = moment().subtract(30, "days");

const randomDate = randomMoment(startDate, endDate);
```
