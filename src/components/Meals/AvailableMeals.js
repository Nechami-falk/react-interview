import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import React, {useState, useEffect} from 'react';

  
const AvailableMeals = () => {

  const [meals,setMeals ] =useState([]);


  useEffect(() => {
    const fetchDataMeals = async () => {
      try{
        const data = await fetch('https://react-interview-api-default-rtdb.europe-west1.firebasedatabase.app/meals.json');
        const json = await data.json();
        console.log(json);
        const mealsData = Object.keys(json).map(k => ({id:k, name:json[k].name, description:json[k].description, price:json[k].price}));
        setMeals(mealsData);  
        console.log(mealsData);
      }
      catch(ex){
        console.log(ex);
      }
    }
    fetchDataMeals();
      },[]);


  const mealsList = meals && meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
