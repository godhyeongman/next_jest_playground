import styled from 'styled-components';
import type { AxiosError } from 'axios';
type AlertBannerProps = {
  message: AxiosError;
};

export default function AlertBanner({ message }: AlertBannerProps) {
  const errorMessage = `${message} error occured`;

  return <StyledAlert role="alert">{errorMessage}</StyledAlert>;
}

const StyledAlert = styled.div`
  color: red;
`;
