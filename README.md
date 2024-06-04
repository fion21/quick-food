[![Netlify Status](https://api.netlify.com/api/v1/badges/59cbd1f7-523e-48b1-a279-642fc19dbefd/deploy-status)](https://app.netlify.com/sites/moonlit-marigold-e36de1/deploys)

<!-- [![Issues][issues-shield]][issues-url] -->
<!-- [![PR Welcome][pr-welcome-shield]](#contributing) -->
[![LinkedIn][linkedin-shield]][linkedin-url]
[![Author][author-shield]][author-url]


<!-- PROJECT LOGO -->
<br />

<p align="center">
  <a href="https://fion21.github.io/quick-food">
    <img src="src/assets/logo.jpg" alt="Food icons" width="80" height="80">
  </a>

  <h3 align="center">Quick Food</h3>

  <p align="center">
    A food ordering app utilising react.js
    <br />

<!-- ABOUT THE PROJECT -->
<table>
<tr>
<td>

***Built With***

* HTML5, CSS3, Javascript ES6
* React.js
* Styled Components

[DEMO](https://github.com/fion21/quick-food/assets/31405973/b17f27db-22ec-4bf4-ac97-bfc4c37538b0)


## 1st commit

- two local folders running `npm run dev` for the front end
- backend folder `npm start`
- component created, Header, added logo, changed css background color,added component Header to App.jsx

## 2nd commit

- create a `Meals` component
- backend folder to retrieve meal dummy data
- `GET/meals` add a GET request to the meals route
- `fetch()` method used then the `.then()` method to define when that proise resolves to get bacl the `response()`
wrap this data into a separate function, call it `fetchMeals()`. Next set it as an `async` function, as it is a standard funtion inside a component function. Then we move the code to `await` then do a `const` to get the `response` working.
-  `not ok` allowance, add an if statement for errors after that.
- further add a `try` `catch` wrap after async tbc later
- call `Response.json()`
- import `useState` hook with the word use, so that the data gets loaded with the state updates
- add the `Meals` component to `App.js`

## 3rd commit

- create a `MealItem` component
- one meal item per loaded meal
- export a default component funtion to start the file ...
- return the markup in that list of meals
- import a `prop` such as `name`, `price` or `meal` only for all of the  properties via the curly brackets of the `MealItem` function
- Add `MealItem` component to `Meals` with the key `{meal.id}` then `meal` prop set to the `meal` prop in the loop so the data works

## 4th commit

- created a `Button` component
- changed the `css` to get the logo larger
- css price was a higher rem

## 5th commit

- created a `Store` folder
- created a `CartContent` component
- dealing with button `on click` event handling
- cartReducer `state, action`
- existingCartItemIndex `state.items.findIndex()`, a method build in to JS will update the cart
- `Cart` component
- `UserProgressProvider` component

## 6th commit

- Cart funtion working
- orders added
- customer details in backend
- final review of funtionality 🤩
- Added accumulated `README.md`

</td>
</tr>
</table>

---

## Acknowledgements

* [Maximilian Schwarzmüller](https://www.udemy.com/user/maximilian-schwarzmuller/)

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/fiolalewis
[author-shield]: https://shields.io/badge/Made_with_%E2%9D%A4_by-fion21-F4A92F?style=for-the-badge
[author-url]: https://github.com/fion21
