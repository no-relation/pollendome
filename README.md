## Welcome to Pollendome
Pollendome is a pollen count and forecast app, currently only for the city of Houston, TX. 

Backend repository is over [here.](https://github.com/no-relation/pollendome-server) The app is currently [deployed on Heroku.](https://pollendome.herokuapp.com/)

I built this to serve as a friendly and searchable interface for the [mold and pollen data collected by City of Houston Health Department](http://www.houstontx.gov/health/Pollen-Mold/), archives of which are available going back to 2013. I worked with a data scientist to clean up the data and export it to CSV files, which served as seed data. Additionally, the data scientist built a forecast model for a given day of the year, based on that historical data. 

A user can create an account and tell the app how they are feeling on that day; the app will tell you what is in the air, and over time, a pattern can emerge as far as what species of mold or pollen the user is sensitive to. That information can be compared to the pollen and mold forecast of a particular day and the user can be prepared if there tends to be, say, an abundance of elm pollen on February 2nd.

Data is stored in a PostgreSQL database, and served through an API built with Ruby on Rails (v5). Front end was built with React, with [Redux][1], [Chart.js][2], [React-Calendar][3], and [Semantic UI][4] all deserving special mention.

[1]: https://github.com/reduxjs/react-redux
[2]: https://www.npmjs.com/package/react-chartjs-2
[3]: https://www.npmjs.com/package/react-calendar
[4]: https://react.semantic-ui.com/

## Features to come
- Updating the database with daily count numbers
- Aggregating anonymized user input data of how they feel day-to-day to make predictions better
- Serve data from other cities and regions
- Accepting data from a user's wearables (FitBit or Apple Watch, for example)

## Difficulties
As an eternal student, I find it useful to enumerate problems I had in the building of a project, as well as what I did to overcome. 
A non-exhaustive list:

1. Getting the data was a challenge. The original collector of the data, the City of Houston Health Department, changed the data schema several times in the past five years, and my collaborator had to spend a lot of time cleaning it up.

2. There are about 90 different species of pollen and mold being measured, and the actual headers of the CSV files were changing as my collaborator refined the code that built the CSV files. To make things easier on myself, I wrote a custom rake task that would look at the CSV headers and use that to generate a migration file, so I wouldn't have to type and re-type and re-re-type the column titles for my database every time the data changed.

3. There were a lot of dates being passed back and forth from the API to the client, so I had to get intimately familiar with Date objects in both Ruby and JavaScript. One super-fun¹ peculiarity I found: if you create a Date object in JavaScript with just a date (`new Date("2019-01-23")`), it's built with a time of midnight Greenwich time, but it's corrected for your time zone. For me, it was `Tue Jan 22 2019 18:00:00 GMT-0600 (Central Standard Time)` That means when you call `.getDate()` on your date object, it will return what it thinks the current local date is: `22`. [The solution](https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off), as it turns out, is to call `.getUTCDate` instead.

¹ it was not fun.

4. Differences between Chrome and Firefox. When testing in different browsers, I discovered a couple differences in how each one renders JavaScript. 
  - They implement the `sort` function differently when sorting strings. Consider this:
```javascript
["one","two"].sort((a,b)=>b-a)
```

 [According to the documentation,](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) the sort is supposed to happen according to the character's Unicode value. As 't' has a higher value than 'o', you'd expect `sort` to reverse the order of "one" and "two".
 When input in the console in Firefox, the return is:
 ```Array [ "two", "one" ]```
 In Chrome, though, you get: 
 ```(2) ["one", "two"]```
  So it seems like Firefox implements it correctly, but Chrome does not.
 
- The implement the Date object differently. Consider:
```javascript
new Date("2019-02-31")
```

 There is no 31st of February. When trying this line in the Chrome browser, it returns:
 ```Sat Mar 02 2019 18:00:00 GMT-0600 (Central Standard Time)```
 But in Firefox:
 ```Invalid Date```
 So that was fun.²
 
² It was not fun.

# License
This project is licensed under the [MIT License.](./LICENSE) 

<!--
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
-->
