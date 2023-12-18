import { styled } from "styled-components"

import { colors } from "styles/colors"

export const FeedbackWrapper = styled.div`
  display: flex;
  gap: 15px;
  min-width: 400px;
  height: fit-content;
  align-items: center;
  padding: 40px;
  background: ${colors.primary};
`

export const Count = styled.p`
  font-size: 20px;
  font-weight: bold;
  color: ${colors.white};
`

export const ImageContainer = styled.div`
  width: 60px;
  height: 50px;
`


export const Image = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`
