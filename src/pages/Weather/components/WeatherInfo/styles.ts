import { styled } from "styled-components";

export const WeatherInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 50px;
  width: 600px;
  height: 129px;
  background: linear-gradient(
    134deg,
    rgba(47, 72, 111, 0.62) 5.78%,
    rgba(11, 27, 52, 0.62) 96.58%
  );
  backdrop-filter: blur(4px);
  border-radius: 15px;
  padding: 16px 36px;
  box-sizing: border-box;
`;

export const TempContainer = styled.div`
  width: 150px;
  height: 100px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: flex-start;
  gap: 5px;
  margin-left: 20px;
`;

export const WeatherTemp = styled.p`
  color: #fff;
  font-size: 57px;
  font-weight: 500;
`;

export const WeatherCity = styled.p`
  color: #fff;
  font-size: 18px;
  font-weight: 400;
`;

export const ImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
