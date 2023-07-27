import { forwardRef } from "react";

const CheckoutInput = forwardRef((props, ref) => {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input ref={ref} type="text" id={props.id} />
      {props.validity && <p>Please enter a valid {props.id}.</p>}
    </div>
  );
});

export default CheckoutInput;
