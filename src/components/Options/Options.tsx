import { useEffect, useState } from 'react';
import ScoopOption from './ScoopOptions';
import ToppingOption from './ToppingOption';
import type { ScoopProps, ScoopOptionT } from './ScoopOptions';
import axios from 'axios';
import { AlertBanner } from '../AlertBanner';
import type { AxiosError } from 'axios';
import { pricePerItem } from '../../constants';
import { formatCurrency } from '../../utils';
import { useOrderDetails } from '../../contexts/OrderDetails';

type OptionsProps = {
  optionType: 'scoops' | 'toppings';
};

export default function Options({ optionType }: OptionsProps) {
  const [items, setItems] = useState<ScoopProps[] | []>([]);
  const [error, setError] = useState<AxiosError>();

  const { totalSums } = useOrderDetails()!;

  useEffect(() => {
    axios
      .get(`http://localhost:3000/${optionType}`)
      .then(res => setItems(res.data))
      .catch(err => {
        setError(err);
      });
  }, [optionType]);

  if (error) {
    return <AlertBanner message={error} />;
  }

  //TODO: null 토핑 옵션컴포넌트로 교체
  const ItemComponent: ScoopOptionT =
    optionType === 'scoops' ? ScoopOption : ToppingOption;

  const optionItems: JSX.Element[] = items.map(({ name, imagePath }) => {
    return <ItemComponent name={name} imagePath={imagePath} key={name} />;
  });

  const title =
    optionType[0].toUpperCase() + optionType.slice(1).toLocaleLowerCase();

  return (
    <div>
      <h2>{title}</h2>
      <p>{formatCurrency(pricePerItem[optionType])} each</p>
      <p>
        {title} total {formatCurrency(totalSums[optionType])}
      </p>
      {optionItems}
    </div>
  );
}
