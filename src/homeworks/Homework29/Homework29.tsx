import { Homework29Wrapper, InputButtonWrapper } from "./styles"
import Input from "../../components/Input"
import Button from "../../components/Button"
import { useState, ChangeEvent } from "react"

function Homework29() {
  const [inputText, setInputText] = useState<string>("");
  const [text, setText] = useState<string>("");

  const onChangeText = (event: ChangeEvent<HTMLInputElement>) => {
    setInputText(event.target.value);
  }

  return (
    <Homework29Wrapper>
      <InputButtonWrapper>
        <Input value={inputText} onChange={onChangeText} placeholder="Enter text" />
        <Button onClick={() => {
          inputText ? setText(inputText) : alert("Введите данные в Input");
          // setInputText("")
          }}/>
      </InputButtonWrapper>
      <p>{text}</p>
    </Homework29Wrapper>
  )
}

export default Homework29
