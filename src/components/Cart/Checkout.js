import { useRef, useState } from "react";

import styles from "./Checkout.module.css";

const isEmpty = value => {
  return value.trim() === "";
}

const isFiveChars = value => {
  return value.trim().length === 5;
}

const Checkout = (props) => {
  const [formIsValid, setFormIsValid] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalcodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalcode = postalcodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(enteredName);
    const enteredStreetIsValid = !isEmpty(enteredStreet);
    const enteredPostalcodeIsValid = isFiveChars(enteredPostalcode);
    const enteredCityIsValid = !isEmpty(enteredCity);

    setFormIsValid({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalcodeIsValid,
      city: enteredCityIsValid
    })

    const formIsValid = enteredNameIsValid && enteredStreetIsValid && enteredPostalcodeIsValid && enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      city: enteredCity,
      postalCode: enteredPostalcode
    });
  };

  return (
    <form onSubmit={confirmHandler} className={styles.form}>
      <div className={`${styles.control} ${formIsValid.name ? "" : styles.invalid}`}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef}></input>
        {!formIsValid.name && <p>Please enter a valid name.</p>}
      </div>
      <div className={`${styles.control} ${formIsValid.street ? "" : styles.invalid}`}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef}></input>
        {!formIsValid.street && <p>Please enter a valid street.</p>}
      </div>
      <div className={`${styles.control} ${formIsValid.postalCode ? "" : styles.invalid}`}>
        <label htmlFor="postalcode">Postal Code</label>
        <input type="text" id="postalcode" ref={postalcodeInputRef}></input>
        {!formIsValid.postalCode && <p>Please enter a valid postalcode.</p>}
      </div>
      <div className={`${styles.control} ${formIsValid.city ? "" : styles.invalid}`}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef}></input>
        {!formIsValid.city && <p>Please enter a valid city.</p>}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;