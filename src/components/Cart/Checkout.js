import { useRef, useState, useEffect } from "react";
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

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  console.log(nameInputRef);

  function confirmHandler(event) {
    event.preventDefault();

    const nameInput = nameInputRef.current.value;
    const streetInput = streetInputRef.current.value;
    const postalInput = postalInputRef.current.value;
    const cityInput = cityInputRef.current.value;

    console.log(nameInput.current);

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
        ref={nameInputRef}
        validity={!formInputsValidity.name}
      />

      <CheckoutInput
        className={streetControlClasses}
        label="Street"
        id="street"
        ref={streetInputRef}
        validity={!formInputsValidity.street}
      />
      <CheckoutInput
        className={postalControlClasses}
        label="Postal Code"
        id="postal"
        ref={postalInputRef}
        validity={!formInputsValidity.postal}
      />
      <CheckoutInput
        className={cityControlClasses}
        label="City"
        id="city"
        ref={cityInputRef}
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
