import { useState } from 'react';

function SundaeIceCream() {
  return (
    <>
      <h1>Sundae Ice Cream</h1>
      <OrderSummary />
      <SummaryForm />
    </>
  );
}

export function OrderSummary() {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items ordered: 2</p>
    </div>
  );
}

export function SummaryForm() {
  const [checked, setChecked] = useState(false);

  const onChangeCheckbox = () => {
    setChecked(!checked);
  };

  return (
    <form>
      <label htmlFor="terms-and-conditions">
        <input
          type="checkbox"
          id="terms-and-conditions"
          onChange={onChangeCheckbox}
        />
        I agree to Terms and Conditions
      </label>
      <button type="submit" disabled={!checked}>
        Confirm Order
      </button>
    </form>
  );
}

export default SundaeIceCream;
