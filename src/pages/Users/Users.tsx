import { useSelector } from "react-redux"
import {v4} from "uuid"
import { usersState } from "store/redux/users/selectors"
import {User} from "store/redux/users/type"

import { UsersPageWrapper, UserCard, ParagraphStylesBody } from "./styles"

function Users() {
  const usersSt = useSelector(usersState)
  console.log(v4());
  return (
    <UsersPageWrapper>
      {usersSt.users.map((user: User) => (
        <UserCard key={v4()}>
          <ParagraphStylesBody>{user.firstLastName}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.age}</ParagraphStylesBody>
          <ParagraphStylesBody>{user.jobTitle}</ParagraphStylesBody>
        </UserCard>
      ))}
    </UsersPageWrapper>
  )
}

export default Users
