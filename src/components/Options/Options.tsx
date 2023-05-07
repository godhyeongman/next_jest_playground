import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOptions';
import type { ScoopProps, ScoopOptionT } from './ScoopOptions';
import axios from 'axios';

type OptionsProps = {
  optionType: 'scoops' | 'toppings';
};

export default function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<ScoopProps[] | []>([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then(res => setItems(res.data))
      .catch(err => {
        console.error(err);
      });
  }, [optionType]);

  //TODO: null 토핑 옵션컴포넌트로 교체
  const ItemComponent: ScoopOptionT | null =
    optionType === 'scoops' ? ScoopOption : null;

  const optionItems: Array<JSX.Element | undefined> = items.map(
    ({ name, imagePath }) => {
      if (ItemComponent !== null)
        return <ItemComponent name={name} imagePath={imagePath} key={name} />;
    },
  );

  return <div>{optionItems}</div>;
}
