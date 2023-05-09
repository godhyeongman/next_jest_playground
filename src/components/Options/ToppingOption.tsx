import { useEffect, useState } from 'react';
import axios from 'axios';

export default function ToppingOption() {
  const [toppings, setToppings] = useState<
    { name: string; imagePath: string }[] | []
  >([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/toppings')
      .then(res => setToppings(res.data));
  }, []);

  const test = toppings.map(
    ({ name, imagePath }: { name: string; imagePath: string }) => (
      <img src={imagePath} alt={`${name} topping`} key={name} />
    ),
  );

  return <>{test}</>;
}
