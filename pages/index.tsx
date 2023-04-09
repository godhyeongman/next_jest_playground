function SundaeIceCream() {
  return (
    <>
      <h1>Sundae Ice Cream</h1>
      <OrderSummary />
      <SummaryForm />
    </>
  );
}

function OrderSummary() {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items ordered: 2</p>
    </div>
  );
}

function SummaryForm() {
  return (
    <form>
      <label htmlFor="terms-and-conditions">
        <input type="checkbox" id="terms-and-conditions" />I agree to Terms and
        Conditions
      </label>
      <button type="submit" disabled={true}>
        Confirm Order
      </button>
    </form>
  );
}

export default SundaeIceCream;
