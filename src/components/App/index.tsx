import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { ThemeProvider } from 'styled-components';
import { Container } from './styles';
import Card from '../Card';

export default function App(){
  return(
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles/>
      <Container>
        <Card/>
      </Container>
    </ThemeProvider>
  )
}
