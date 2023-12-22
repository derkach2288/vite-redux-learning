import Button from "components/Button"

import {
  ErrorInfoWrapper,
  ErrorCod,
  ErrorCity,
  ButtonsContainer,
} from "./styles"

interface ErrorInfoProps {
  cod: string;
  message: string;
  onDelete: any
}

function ErrorInfo({cod, message, onDelete  }: ErrorInfoProps) {
  return (
    <ErrorInfoWrapper>
        <ErrorCod>{cod}</ErrorCod>
        <ErrorCity>{message}</ErrorCity>
      <ButtonsContainer>
        <Button name="Delete" onClick={onDelete}/>
      </ButtonsContainer>

    </ErrorInfoWrapper>
  )
}

export default ErrorInfo
