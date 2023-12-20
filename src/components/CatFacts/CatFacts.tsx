import { useDispatch, useSelector } from "react-redux"

import { catFactsGeneratorSelector } from "store/redux/catFactsGenerator/selectors"
import { getCatFact } from "store/redux/catFactsGenerator/CatFactsGeneratorSlice"

import {
  CatFactsWrapper,
  CatFactsCard,
  CatFactsName,
  CatFactsContainer,
  Paragraph,
  LoadingContainer,
} from "./styles"
import Button from "components/Button"

function CatFacts() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector(catFactsGeneratorSelector)
  // console.log(data)
  // console.log(error)
  // console.log(isLoading)

  return (
    <CatFactsWrapper>
      <CatFactsCard>
        <CatFactsName>Cat Facts</CatFactsName>
        <Button
          name="Get Cat Fact"
          onClick={() => {
            dispatch(getCatFact() as any)
          }}
        />
        <LoadingContainer>
          {isLoading && <Paragraph>LOADING...</Paragraph>}
        </LoadingContainer>
        {data && (
          <CatFactsContainer>
            {data.map((catFact) => (
              <Paragraph key={catFact.id}>{catFact.fact}</Paragraph>
            ))}
          </CatFactsContainer>
        )}
        {error && <Paragraph>Error response</Paragraph>}
      </CatFactsCard>
    </CatFactsWrapper>
  )
}

export default CatFacts
