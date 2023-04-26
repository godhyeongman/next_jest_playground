import { useEffect } from 'react';
import { OrderSummary, SummaryForm } from '../src/components/OrderForm';

function SundaeIceCream() {
  useEffect(() => {
    console.log('SundaeIceCream mounted');
    if (process.env.NODE_ENV === 'development') {
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const { worker } = require('../src/mocks/server');
      worker.start();
    }
  }, []);

  return (
    <>
      <h1>Sundae Ice Cream</h1>
      <OrderSummary />
      <SummaryForm />
    </>
  );
}

export default SundaeIceCream;
