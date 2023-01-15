import { useCallback, useEffect, useState } from 'react';

import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

import styles from './AvailableMeals.module.css';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://platepal-app-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json", {
        method: "GET"
      })

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      
      const mealsObject = Object.values(data);

      for (let index in mealsObject) {
        meals.push({
          id: mealsObject[index].id,
          title: mealsObject[index].title,
          price: mealsObject[index].price,
          description: mealsObject[index].description,
        })
      }

      setMeals(meals);

    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, [meals]);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let mealsList = <p>Found no meals.</p>

  if (meals.length !== 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.title}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  if (error) {
    mealsList = <p>{error.message}</p>
  }
  if (isLoading) {
    mealsList = <p>Loading...</p>
  }

  return (
    <section className={styles.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;