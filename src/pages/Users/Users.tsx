import { useSelector } from "react-redux"
import { usersState } from "store/redux/users/selectors"
import {User} from "store/redux/users/type"

import { UsersPageWrapper, UserCard, ParagraphStylesBody } from "./styles"

function Users() {
  const usersSt = useSelector(usersState)
  return (
    <UsersPageWrapper>
      {usersSt.users.map((user: User) => (
        <UserCard>
          <ParagraphStylesBody>{user.firstLastName}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.age}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.jobTitle}</ParagraphStylesBody>
        </UserCard>
      ))}
    </UsersPageWrapper>
  )
}

export default Users
