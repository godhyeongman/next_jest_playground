import styled from 'styled-components';

function Home() {
  return (
    <>
      <RedButton>Change to blue</RedButton>
      <RedButton />
    </>
  );
}

const RedButton = styled.button`
  background-color: red;
`;

export default Home;
