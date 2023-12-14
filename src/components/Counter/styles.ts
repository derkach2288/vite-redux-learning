import {styled} from "styled-components"

import {colors} from "styles/colors"

export const CounterWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 300px;
  height: fit-content;
  padding: 40px;
  background: ${colors.primary};
`

export const Count = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`