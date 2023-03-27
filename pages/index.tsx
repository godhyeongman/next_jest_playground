import styled from 'styled-components';
import { useState } from 'react';

function Home() {
  const [isClick, setIsClick] = useState(false);

  const onClickButton = () => {
    setIsClick(!isClick);
  };

  const onChangeCheckbox = () => {
    setIsClick(true);
  };
  return (
    <>
      <RedButton
        onClick={onClickButton}
        backgroundColor={isClick}
        disabled={isClick}
      >
        {isClick ? '111' : 'Change to blue'}
      </RedButton>
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={isClick}
        onChange={onChangeCheckbox}
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </>
  );
}

const RedButton = styled.button<{ backgroundColor: boolean }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? 'blue' : 'red'};
`;

export default Home;
