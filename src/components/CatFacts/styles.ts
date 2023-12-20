import styled from "styled-components"
import { NotesImg } from "assets"

export const CatFactsWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 20px;
`

export const CatFactsCard = styled.div`
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

export const CatFactsName = styled.p`
  display: flex;
  justify-content: center;
  font-size: 24px;
  font-weight: bold;
  color: grey;
`

export const CatFactsContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  gap: 20px;
`

export const FactContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`

export const Paragraph = styled.p`
  flex: 0 0 80%;
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
`

export const LoadingContainer = styled.div`
  height: 18px;
`
