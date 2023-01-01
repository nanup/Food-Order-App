import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';
import { useCallback, useEffect, useState } from 'react';

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMeals = useCallback(async () => {
    setIsLoading(true);

    try {
      const response = await fetch("https://test-app-fb5e3-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json", {
        method: "GET"
      })

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      setMeals(Object.values(data));

    } catch (error) {
      setError(error.message);
    }

    fetchMeals();
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMeals();
  }, [fetchMeals]);

  let mealsList = <p>Found no meals.</p>

  if (meals.length !== 0) {
    mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    ));
  }
  if (error) {
    mealsList = <p>{error}</p>
  }
  if (isLoading) {
    mealsList = <p>Loading...</p>
  }

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
