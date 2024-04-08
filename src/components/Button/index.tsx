import { ButtonContainer } from "./styles";
import buttonIcon from '../../assets/styles/images/icon-dice.svg';

interface ButtonProps {
  handleSetAdviceObject: () => void;
}

export default function Button({handleSetAdviceObject}: ButtonProps){

  return(
    <ButtonContainer type="button" onClick={handleSetAdviceObject}>
      <img src={buttonIcon}/>
    </ButtonContainer>
  )
}
