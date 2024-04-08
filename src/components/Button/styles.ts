import styled from 'styled-components';

export const ButtonContainer = styled.button`
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.primary.neonGreen};
  position: absolute;
  bottom: -10%;
`
