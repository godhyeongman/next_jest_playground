import { type } from 'os';
import { useState } from 'react';
import styled from 'styled-components';

function SundaeIceCream() {
  return (
    <>
      <h1>Sundae Ice Cream</h1>
      <OrderSummary />
      <SummaryForm />
    </>
  );
}

export function OrderSummary() {
  return (
    <div>
      <h2>Order Summary</h2>
      <p>Items ordered: 2</p>
    </div>
  );
}

export function SummaryForm() {
  const [checked, setChecked] = useState(false);
  const [hover, setHover] = useState(false);

  const onChangeCheckbox = () => {
    setChecked(!checked);
  };

  const onEnterCheckbox = () => {
    setHover(true);
  };

  const onLeaveCheckbox = () => {
    setHover(false);
  };

  return (
    <form>
      <label
        htmlFor="terms-and-conditions"
        onMouseEnter={onEnterCheckbox}
        onMouseLeave={onLeaveCheckbox}
      >
        <input
          type="checkbox"
          id="terms-and-conditions"
          onChange={onChangeCheckbox}
        />
        I agree to Terms and Conditions
      </label>
      <button type="submit" disabled={!checked}>
        Confirm Order
      </button>
      <Popover isHover={hover} />
    </form>
  );
}

type PopoverProps = { isHover: boolean };

const Popover = ({ isHover }: PopoverProps) => {
  return (
    <>
      {isHover && (
        <PopoverWrapper>
          <PopoverBody>No ice cream will deliverd</PopoverBody>
        </PopoverWrapper>
      )}
    </>
  );
};

const PopoverWrapper = styled.div``;

const PopoverBody = styled.span``;

export default SundaeIceCream;
