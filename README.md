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

## Deploying to NPM with CircleCI

**1.** Update package.json version to increment npm version.

**2.**

```console
npm install
```

**3.** Push to GitHub with version number as tag with v affixed. For example:

```console
git tag v1.0.3
git push origin v1.0.3
```
