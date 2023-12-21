import { styled } from "styled-components";

export const ErrorInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
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


export const ErrorCod = styled.p`
  color: #F35E5E;
  text-align: center;
  font-size: 57px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ErrorCity = styled.p`
  color: #FFF;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  letter-spacing: 2px;
`;
