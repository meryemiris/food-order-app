import { useState } from "react";
import classes from "./Checkout.module.css";
import CheckoutInput from "./CheckoutInput";

const isEmpty = (value) => value.trim() === "";
const isFiveChars = (value) => value.trim().length === 5;

export default function Checkout(props) {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    postal: true,
    city: true,
  });

  function confirmHandler(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const userData = Object.fromEntries(formData.entries());

    const nameInput = userData.name;
    const streetInput = userData.name;
    const postalInput = userData.postal;
    const cityInput = userData.city;

    const nameInputIsValid = !isEmpty(nameInput);
    const streetInputIsValid = !isEmpty(streetInput);
    const postalInputIsValid = isFiveChars(postalInput);
    const cityInputIsValid = !isEmpty(cityInput);

    setFormInputsValidity({
      name: nameInputIsValid,
      street: streetInputIsValid,
      postal: postalInputIsValid,
      city: cityInputIsValid,
    });

    const formIsValid =
      nameInputIsValid &&
      streetInputIsValid &&
      postalInputIsValid &&
      cityInputIsValid;

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameInput,
      street: streetInput,
      postal: postalInput,
      city: cityInput,
    });
    event.target.reset();
  }

  const nameControlClasses = `${classes.control} ${
    formInputsValidity.name ? "" : classes.invalid
  }`;

  const streetControlClasses = `${classes.control} ${
    formInputsValidity.street ? "" : classes.invalid
  }`;

  const postalControlClasses = `${classes.control} ${
    formInputsValidity.postal ? "" : classes.invalid
  }`;

  const cityControlClasses = `${classes.control} ${
    formInputsValidity.city ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <CheckoutInput
        className={nameControlClasses}
        label="Your Name"
        id="name"
        name="name"
        validity={!formInputsValidity.name}
      />

      <CheckoutInput
        className={streetControlClasses}
        label="Street"
        id="street"
        name="street"
        re
        validity={!formInputsValidity.street}
      />
      <CheckoutInput
        className={postalControlClasses}
        label="Postal Code"
        id="postal"
        name="postal"
        validity={!formInputsValidity.postal}
      />
      <CheckoutInput
        className={cityControlClasses}
        label="City"
        id="city"
        name="city"
        validity={!formInputsValidity.city}
      />

      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
}
