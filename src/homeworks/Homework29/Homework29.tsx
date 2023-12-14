import { Homework29Wrapper, InputButtonWrapper } from "./styles"
import Input from "components/Input"
import Button from "components/Button"
import { useState, ChangeEvent, MouseEvent } from "react"

function Homework29() {
  const [inputText, setInputText] = useState<string>("")
  const [text, setText] = useState<string>("")

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value)
  }

  const showText = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    if (inputText.length === 0) {
      alert("")
      return
    }

    setText(inputText)
  }

  return (
    <Homework29Wrapper>
      <InputButtonWrapper>
        <Input
          value={inputText}
          onChange={onChangeText}
          placeholder="Enter text"
        />
        <Button
          type="button"
          onClick={showText}
        />
      </InputButtonWrapper>
      <p>{text}</p>
    </Homework29Wrapper>
  )
}

export default Homework29
