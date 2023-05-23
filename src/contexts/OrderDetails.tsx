import { createContext, useContext, useState } from 'react';

const OrderDetail = createContext(null);

type defaultOptionT<T extends string, K extends string> = Record<
  T,
  Record<K, number> | null
>;

const DEFAULT_OPTIONS: defaultOptionT<string, string> = {
  scoops: null,
  toppings: null,
};

export function useOrderDetails() {
  const orederContextValue = useContext(OrderDetail);

  return orederContextValue;
}

type updateOptionT = (
  target: string,
  targetItem: string,
  newItemCount: number,
) => void;

export function OrderDetailsProvider() {
  const [optionCounts, setOptionCounts] = useState(DEFAULT_OPTIONS);

  const updateItemCount: updateOptionT = (target, targetItem, newItemCount) => {
    const newOptionCounts = { ...optionCounts };
    const targetProperty = newOptionCounts[target];

    if (!targetProperty) throw new Error('target property is falsy');

    targetProperty[targetItem] = newItemCount;
  };
}
