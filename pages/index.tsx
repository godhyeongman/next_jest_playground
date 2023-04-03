import styled from 'styled-components';
import { useState } from 'react';

export const replaceCamelWithSpaces = colorName =>
  colorName.replace(/\B([A-Z])\B/g, ' $1');

function Home() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const onClickButton = () => {
    setIsButtonDisabled(!isButtonDisabled);
  };

  const onChangeCheckbox = () => {
    setIsButtonDisabled(true);
  };

  const buttonBackgroundColor = isButtonDisabled ? 'orange' : 'tomato';
  return (
    <>
      <RedButton
        onClick={onClickButton}
        backgroundColor={buttonBackgroundColor}
        disabled={isButtonDisabled}
      >
        {isButtonDisabled ? 'change to orange' : 'change to tomato'}
      </RedButton>
      <input
        type="checkbox"
        id="disabled-button-checkbox"
        defaultChecked={isButtonDisabled}
        onChange={onChangeCheckbox}
      />
      <label htmlFor="disabled-button-checkbox">Disable button</label>
    </>
  );
}

const RedButton = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export default Home;
