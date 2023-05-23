import { createContext, useContext, useState } from 'react';
import { pricePerItem } from '../constants';

type defaultOptionT<T extends string, K extends string> = Record<
  T,
  Record<K, number> | null
>;

type orderDetailCtxT = {
  optionCounts: defaultOptionT<string, string>;
  totalSums: Record<string, number>;
  updateItemCount: updateOptionT;
  resetOrder: () => void;
};

const OrderDetail = createContext<null | orderDetailCtxT>(null);

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

export function OrderDetailsProvider(
  props: React.ComponentPropsWithoutRef<'div'>,
) {
  const [optionCounts, setOptionCounts] = useState(DEFAULT_OPTIONS);

  const updateItemCount: updateOptionT = (target, targetItem, newItemCount) => {
    const newOptionCounts = { ...optionCounts };
    const targetProperty = newOptionCounts[target];

    if (!targetProperty) throw new Error('target property is falsy');

    targetProperty[targetItem] = newItemCount;
  };

  const resetOrder = () => {
    setOptionCounts(DEFAULT_OPTIONS);
  };

  const calcTotalSum = (target: string) => {
    const targetItem = optionCounts[target];
    const targetPrice = pricePerItem[target];

    if (!targetItem) throw new Error('err');

    const counts = Object.values(targetItem);

    const totalCount = counts.reduce((total, value) => total + value);

    return totalCount * targetPrice;
  };

  const totalSums = {
    scoops: calcTotalSum('scoops'),
    toppings: calcTotalSum('toppings'),
  };

  const providerValue = {
    optionCounts,
    totalSums,
    updateItemCount,
    resetOrder,
  };

  return (
    <OrderDetail.Provider value={providerValue} {...props}>
      {props.children}
    </OrderDetail.Provider>
  );
}
