import styled from "styled-components"
import { colors } from "styles/colors"
import {NotesImg} from "assets"

export const TodoListWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`

export const TodoListForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 600px;
  height: fit-content;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  background: url(${NotesImg});
  background-size: 100%;

  `

export const TodoListName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: grey;
`

export const UlContainer = styled.ul`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
`

export const LiStyles = styled.li`
  font-size: 16px;
  color: #555;
  width: fit-content;
  font-weight: bold;
  font-family: "YourFontFamily", sans-serif;
  overflow-wrap: break-word;
  list-style: initial;
  margin-left: 20px;
  margin-bottom: 10px;
  overflow-wrap: break-word;
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 0, 0, 0.3);; /* Цвет фона при наведении */
  }
`
