import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Food, Delivered To You</h2>
      <p>
        Explore all our offerings, you can find something for every situtaion.
        Be it lazy afternoon lunch or a romantic dinner date.
      </p>
      <p>
        All of our services follow strict safety guidelines and are
        frequently and thoroughly vetted for compliance to our standards.
      </p>
    </section>
  );
};

export default MealsSummary;
