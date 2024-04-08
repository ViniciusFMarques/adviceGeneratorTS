import styled from 'styled-components';

export const CardContainer = styled.main`
  max-width: 500px;
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: ${({theme}) => theme.colors.neutral.darkGrayishBlue};
  border-radius: 8px;
  position: relative;

  h1{
    color: ${({theme}) => theme.colors.primary.neonGreen};
    font-size: 0.4rem;
    font-weight: 400;
    margin-bottom: 16px;
  }

  p{
    color: ${({theme}) => theme.colors.primary.lightCyan};
    margin-bottom: 16px;
    font-size: 1rem;
    font-weight: 800;
    text-align: center;
  }

  > img{
    margin-bottom: 16px;
    width: 100%;
  }
`
