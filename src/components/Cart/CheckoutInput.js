export default function CheckoutInput(props) {
  return (
    <div className={props.className}>
      <label htmlFor={props.id}>{props.label}</label>
      <input type="text" name={props.name} id={props.id} />
      {props.validity && <p>Please enter a valid {props.id}.</p>}
    </div>
  );
}
