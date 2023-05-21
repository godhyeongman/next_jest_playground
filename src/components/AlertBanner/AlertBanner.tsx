import styled from 'styled-components';

type AlertBannerProps = {
  message: string;
};

export default function AlertBanner({ message }: AlertBannerProps) {
  const errorMessage = `${message} error occured`;

  return <StyledAlert>{errorMessage}</StyledAlert>;
}

const StyledAlert = styled.div`
  color: red;
`;
