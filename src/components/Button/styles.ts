import styled from "styled-components"

interface ButtonComponetProps {
  $isRedFont?: boolean | undefined
}

export const ButtonComponent = styled.button<ButtonComponetProps>`
  padding: 12px 40px;
  gap: 10px;
  cursor: pointer;
  border-radius: 50px;
  border: 1px solid #fff;
  font-size: 20px;
  color: #fff; 
  background-color: transparent;
  cursor: pointer;
`
