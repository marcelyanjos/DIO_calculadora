import { ButtonContainer, ButtonPrincipal } from "./styles";

const Button=({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick} type="button">
        {label}
      </ButtonContainer>
    );
  }

  const Button1=({label, onClick}) => {
    return (
      <ButtonPrincipal onClick={onClick} type="button">
        {label}
      </ButtonPrincipal>
    );
  }

  
  export {Button,Button1};
  