import { useState, useEffect, ChangeEvent } from "react"

import Button from "components/Button"

import { Homework36Wrapper, Text, Card, ContainerJokes } from "./styles"
interface UserData {
  firstName?: string
  lastName?: string
  gender?: string
  email?: string
  avatar?: string
}

function Homework36() {
  const [user, setUser] = useState<UserData | undefined>(undefined)
  const [userError, setUserError] = useState<string | undefined>(undefined)
  const [shouldFetch, setShouldFetch] = useState<boolean>(true);

  const getUsers = async () => {
    const response = await fetch("https://randomuser.me/api/")
    console.log(response)

    if (response.ok) {
      const data = await response.json()
      console.log(data)
      setUserError(undefined)
      setUser({
        firstName: data.results[0].name.first,
        lastName: data.results[0].name.last,
        gender: data.results[0].gender,
        email: data.results[0].email,
        avatar: data.results[0].picture.medium,
      })
    } else {
      setUserError("Some API Error")
      alert("Some API Error")
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      await getUsers();
    };

    fetchData();

    const intervalId = setInterval(() => {
      if (shouldFetch) {
        fetchData();
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [shouldFetch]);  


  return (
    <Homework36Wrapper>
      <Card>
        <ContainerJokes>
          {user && (
            <>
              <img src={user.avatar} alt="" />
              <Text>{user.firstName}</Text>
              <Text>{user.lastName}</Text>
              <Text>{user.gender}</Text>
              <Text>{user.email}</Text>
            </>
          )}
          {/* {userError && <Text>{userError}</Text>} */}
        </ContainerJokes>
        <Button
          name="Finish randomize"
          onClick={() => {
            setShouldFetch(false)
            alert("Randomize finished")
          }}
        />
      </Card>
    </Homework36Wrapper>
  )
}

export default Homework36
