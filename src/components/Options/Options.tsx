import { useEffect, useState } from 'react';

type OptionsProps = {
  optionType: 'scoops' | 'toppings';
};

export default function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${optionType}`)
      .then(res => res.json())
      .then(setItems);
  });

  return <div />;
}
