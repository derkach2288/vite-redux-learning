import { useSelector, useDispatch } from "react-redux"
import { usersActions } from "store/redux/users/usersSlice"
import { v4 } from "uuid"
import { usersState } from "store/redux/users/selectors"
import { User } from "store/redux/users/type"
import Button from "components/Button"

import { UsersPageWrapper, UserCard, ParagraphStylesBody } from "./styles"

function Users() {
  const usersSt = useSelector(usersState)
  const dispatch = useDispatch()

  console.log(v4())
  return (
    <UsersPageWrapper>
      {usersSt.map((user: User) => (
        <UserCard key={v4()}>
          <ParagraphStylesBody>{user.firstLastName}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.age}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.jobTitle}</ParagraphStylesBody>
          <Button
            name="Delete User"
            type="button"
            onClick={() => {
              dispatch(usersActions.deleteUser(user.id))
            }}
          />
        </UserCard>
      ))}
      {usersSt.length > 0 && <Button name="Delete all users" onClick={() => {
        dispatch(usersActions.deleteAllUsers())
      }}/>}
    </UsersPageWrapper>
  )
}

export default Users
