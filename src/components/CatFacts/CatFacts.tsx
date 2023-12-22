import { useDispatch, useSelector } from "react-redux"
import {useEffect} from "react"

import {AppDispatch} from "store/store"

import { catFactsGeneratorSelector } from "store/redux/catFactsGenerator/selectors"
import {
  getCatFact,
  catFactsGeneratorActions,
} from "store/redux/catFactsGenerator/CatFactsGeneratorSlice"
import { CatFactsData } from "store/redux/catFactsGenerator/types"

import {
  CatFactsWrapper,
  CatFactsCard,
  CatFactsName,
  CatFactsContainer,
  FactContainer,
  Paragraph,
  LoadingContainer,
} from "./styles"
import Button from "components/Button"

function CatFacts() {
  const dispatch: AppDispatch = useDispatch()
  const { data, error, isLoading } = useSelector(catFactsGeneratorSelector)

  useEffect(() => {
    if (!!error) {
      alert("Ошибка сети")
    }
  }, [error]);
  
  return (
    <CatFactsWrapper>
      <CatFactsCard>
        <CatFactsName>Cat Facts</CatFactsName>
        <Button
          disabled={isLoading}
          name="Get Cat Fact"
          onClick={() => {
            dispatch(getCatFact())
          }}
        />
        <LoadingContainer>
          {isLoading && <Paragraph>LOADING...</Paragraph>}
        </LoadingContainer>
        {data.length > 0 && (
          <CatFactsContainer>
            {data.map((catFact: CatFactsData) => (
              <FactContainer key={catFact.id}>
                <Paragraph>{catFact.fact}</Paragraph>
                <Button
                  name="Delete fact"
                  onClick={() => {
                    dispatch(catFactsGeneratorActions.deleteFact(catFact.id))
                  }}
                />
              </FactContainer>
            ))}
            <Button
              name="Delete all facts"
              onClick={() => {
                dispatch(catFactsGeneratorActions.deleteAllFacts())
              }}
            />
          </CatFactsContainer>
        )}
        {/* {error && alert("Ошибка сети")} */}
      </CatFactsCard>
    </CatFactsWrapper>
  )
}

export default CatFacts
