import { createContext, useContext, useState } from 'react';

const OrderDetail = createContext(null);

type defaultOptionT = { [key: string]: { [key: string]: number } | null };

const DEFAULT_OPTIONS: defaultOptionT = {
  scoops: null,
  toppings: null,
};

export function useOrderDetails() {
  const orederContextValue = useContext(OrderDetail);

  return orederContextValue;
}

type updateOptionT = (
  target: keyof defaultOptionT,
  targetItem: string,
  newItemCount: number,
) => void;

export function OrderDetailsProvider() {
  const [optionCounts, setOptionCounts] = useState(DEFAULT_OPTIONS);

  const updateItemCount: updateOptionT = (target, targetItem, newItemCount) => {
    const newOptionCounts = { ...optionCounts };

    const { [target]: _target } = newOptionCounts;

    setOptionCounts({
      ...newOptionCounts,
      [target]: { ..._target, [targetItem]: newItemCount },
    });
  };
}
