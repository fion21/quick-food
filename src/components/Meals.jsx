import { useState, useEffect } from "react";

export default function Meals() {
   const [loadedMeals, setLoadedMeals] = useState([]);

   useEffect(()=> {

      async function fetchMeals() {

      //GET /meals for the moment http localhost 3000
      const response = await fetch('http://localhost:3000/meals')

      //add an if (not) statement for errors
      if (!response.ok) {
      // ....
      }
      const meals = await response.json();
      //updates the loaded Meals
      setLoadedMeals(meals);
      }
      fetchMeals();

   }, []);



    return (
    <ul id='meals'>
    {loadedMeals.map((meal) => (
      <li key={meal.id}>{meal.name}</li>
     ))}
    </ul>
    );
}
