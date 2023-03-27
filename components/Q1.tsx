import { useState } from 'react';

function Q1() {
  const [isClicked, setIsClicked] = useState(false);

  const onClickCheckBox = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <button disabled={!isClicked}>target Button</button>
      <input type="checkbox" onClick={onClickCheckBox} />
    </>
  );
}

export default Q1;
