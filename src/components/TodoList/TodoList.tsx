import { useState, ChangeEvent } from "react"
import {useDispatch, useSelector} from "react-redux"

import {todoListActions} from "store/redux/todoList/todoListSlice"
import {Note} from "store/redux/todoList/types"
import {todoListState} from "store/redux/todoList/selectors"

import Input from "components/Input"
import Button from "components/Button"

import {
  TodoListWrapper,
  TodoListForm,
  TodoListName,
  LiStyles,
  UlContainer
} from "./styles"

function TodoList() {
  const [note, setNote] = useState<string>("")
  const dispatch = useDispatch();
  const todoList = useSelector(todoListState)

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setNote(event.target.value)
  }

  return (
    <TodoListWrapper>
      <TodoListForm>
        <TodoListName>Добавить событие</TodoListName>
        <Input name="note" placeholder="Список дел" value={note} onChange={(event: ChangeEvent<HTMLInputElement>) => onChangeInput(event)}/>
        <Button name="Запланировать событие" onClick={() => {
          if(!note.trim()) {
            return alert("Поле \"Список дел\" пустое. Пожалуйста, введите данные")
          }
          dispatch(todoListActions.addNote({note}))
          setNote("")
          }}/>
         {todoList.length > 0 && <UlContainer>
        {todoList.map((not: Note) => (
          <LiStyles key={not.id} onClick={() => {dispatch(todoListActions.deleteNote(not.id))}}>{not.note}</LiStyles>
        ))}
        </UlContainer>}
        { todoList.length > 0 &&<Button name="Очистить список" onClick={() => {dispatch(todoListActions.deleteTodoList())}} />}
      </TodoListForm>
    </TodoListWrapper>
  )
}

export default TodoList
