import { styled } from "styled-components"
import { WeatherImage } from "assets"

export const Homework29Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100%;
  height: 100vh; */
  flex: 1;
  gap: 30px;
  background-image: url(${WeatherImage});
  background-repeat: no-repeat;
  background-size: cover;
`

export const InputButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 500px;
  margin-top: 120px;
  gap: 12px;
`
