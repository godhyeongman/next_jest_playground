import { OrderSummary, SummaryForm } from '../src/components/OrderForm';
import Options from '../src/components/Options/Options';
import { useEffect } from 'react';

function SundaeIceCream() {
  useEffect(() => {
    // getData();
  }, []);
  return (
    <>
      <h1>Sundae Ice Cream</h1>
      <OrderSummary />
      <SummaryForm />
      <Options optionType="scoops" />
    </>
  );
}

export default SundaeIceCream;
