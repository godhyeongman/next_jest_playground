import { useState } from 'react';
import styled from 'styled-components';

function Q2() {
  const [buttonDisable, setButtonDisable] = useState(true);
  const [buttonSwitch, setButtonSwitch] = useState(false);

  const onClickButton = () => {
    setButtonSwitch(!buttonSwitch);
    setButtonDisable(true);
  };

  const onChangeCheckbox = () => {
    setButtonDisable(false);
  };

  return (
    <>
      <StyledButton
        disabled={buttonDisable}
        buttonSwitch={buttonSwitch}
        onClick={onClickButton}
      >
        target Button
      </StyledButton>
      <input
        type="checkbox"
        onChange={onChangeCheckbox}
        defaultChecked={!buttonDisable}
      />
    </>
  );
}

const StyledButton = styled.button<{ buttonSwitch: boolean }>`
  background-color: ${({ disabled, buttonSwitch }) =>
    disabled ? 'gray' : buttonSwitch ? 'blue' : 'red'};
`;

export default Q2;
