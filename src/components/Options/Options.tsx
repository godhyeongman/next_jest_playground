import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOptions';
import type { ScoopProps } from './ScoopOptions';

type OptionsProps = {
  optionType: 'scoops' | 'toppings';
};

export default function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<ScoopProps[] | []>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/${optionType}`)
      .then(res => res.json())
      .then(setItems)
      .catch(err => {
        console.error(err);
      });
  }, [optionType]);

  //TODO: null 토핑 옵션컴포넌트로 교체
  const ItemComponent: React.FC<ScoopProps> | null =
    optionType === 'scoops' ? ScoopOption : null;

  const optionItems: JSX.Element[] | null = items.map(({ name, imagePath }) => (
    <ItemComponent name={name} imagePath={imagePath} key={name} />
  ));
  return <div />;
}
