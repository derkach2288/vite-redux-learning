import { useDispatch, useSelector } from "react-redux"

import { catFactsGeneratorSelector } from "store/redux/catFactsGenerator/selectors"
import { getCatFact, catFactsGeneratorActions } from "store/redux/catFactsGenerator/CatFactsGeneratorSlice"

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
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector(catFactsGeneratorSelector)

  return (
    <CatFactsWrapper>
      <CatFactsCard>
        <CatFactsName>Cat Facts</CatFactsName>
        <Button
          disabled={isLoading}
          name="Get Cat Fact"
          onClick={() => {
            dispatch(getCatFact() as any)
          }}
        />
        <LoadingContainer>
          {isLoading && <Paragraph>LOADING...</Paragraph>}
        </LoadingContainer>
        {data.length >0 && (
          <CatFactsContainer>
            {data.map((catFact) => (
              <FactContainer key={catFact.id}>
                <Paragraph>{catFact.fact}</Paragraph>
                <Button name="Delete fact" onClick={() => {
                  dispatch(catFactsGeneratorActions.deleteFact(catFact.id))
                }}/>
              </FactContainer>
            ))}
            <Button name="Delete all facts" onClick={() => {
              dispatch(catFactsGeneratorActions.deleteAllFacts())
            }}/>
          </CatFactsContainer>
        )}
        {error && <Paragraph>Error response</Paragraph>}
      </CatFactsCard>
    </CatFactsWrapper>
  )
}

export default CatFacts
