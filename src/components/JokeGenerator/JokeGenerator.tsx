import { useDispatch, useSelector } from "react-redux"

import { jokeGeneratorSelector } from "store/redux/jokeGenerator/selectors"
import { getJoke } from "store/redux/jokeGenerator/jokeGeneratorSlice"

import Button from "components/Button"

import { JokeGeneratorWrapper, JokeContainer, Paragraph } from "./styles"

function JokeGenerator() {
  const dispatch = useDispatch()
  const { data, error, isLoading } = useSelector(jokeGeneratorSelector)
  console.log(data)
  console.log(error)
  console.log(isLoading)

  return (
    <JokeGeneratorWrapper>
      <JokeContainer>
        <Button
          name="Get Joke"
          onClick={() => {
            // тут будем диспачить экшн
            dispatch(getJoke() as any)
          }}
        />
        {isLoading && <Paragraph>LOADING...</Paragraph>}
        {data && (
          <>
            <Paragraph>{data.setup}</Paragraph>
            <Paragraph>{data.punchline}</Paragraph>
          </>
        )}
        {error && <Paragraph>Error response</Paragraph>}
      </JokeContainer>
    </JokeGeneratorWrapper>
  )
}

export default JokeGenerator
