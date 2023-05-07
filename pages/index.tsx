import { OrderSummary, SummaryForm } from '../src/components/OrderForm';
import Options from '../src/components/Options/Options';
import { useEffect } from 'react';
import axios from 'axios';

const getData = async () => {
  await axios
    .get(`http://localhost:3000/scoops`)
    .then(res => console.log(res.data))
    .catch(err => {
      console.error(err);
    });
};

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
