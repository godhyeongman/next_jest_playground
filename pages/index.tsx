import styled from 'styled-components';
import { useState } from 'react';

function Home() {
  const [isClick, setIsClick] = useState(false);

  const onClickButton = () => {
    setIsClick(!isClick);
  };
  return (
    <>
      <RedButton onClick={onClickButton} backgroundColor={isClick}>
        {isClick ? '111' : 'Change to blue'}
      </RedButton>
      <input type="checkbox" />
    </>
  );
}

const RedButton = styled.button<{ backgroundColor: boolean }>`
  background-color: ${({ backgroundColor }) =>
    backgroundColor ? 'blue' : 'red'};
`;

export default Home;
