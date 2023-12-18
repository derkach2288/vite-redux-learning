import styled from "styled-components"

import {colors} from 'styles/colors'

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  gap: 10px;
  justify-content: center;
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  min-width: 200px;
  min-height: 150px;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  background-color: #faf0e6;
`

export const ParagraphStylesBody = styled.p`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  font-size: 16px;
  color: #555;
  width: 100%;
  font-weight: bold;
  font-family: "YourFontFamily", sans-serif;
  `;
