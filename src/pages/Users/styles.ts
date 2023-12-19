import styled from "styled-components"

import { colors } from "styles/colors"

export const UsersPageWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: stretch; // подстраивает карточки по высоте
  height: fit-content;
  /* flex: 1; */
  gap: 10px;
  /* justify-content: center; */
`

export const UserCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* min-width: 200px; */
  width: 300px; // фиксированная ширина
  min-height: 150px;
  /* height: fit-content; */ // это свойство не нужно т.к высота подстраивается от родительского свойства align-items: stretch;
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
  overflow-wrap: break-word; // перенос текста

`
/*
Как показать точеки, когда текст длинный
1.Задаете главному контейнеру фиксированную ширину, например 300px
2. Добавляете св-ва тексту: width: 100%;
  text-overflow: ellipsis; // показывает точки 
  overflow: hidden; // скрывает текст что не влез
  */

  /*
Если вы хотите перенносить текст на другие строки, то добавьте вашему тегу с текстом след св-во:
overflow-wrap: break-word;
  */