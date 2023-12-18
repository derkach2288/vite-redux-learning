import { useFormik } from "formik"
import {useDispatch} from "react-redux"


import Input from "components/Input"
import Button from "components/Button"

import { HomePageWrapper, UserForm, UserFormName } from "./styles"

import {usersActions} from "store/redux/users/usersSlice"

function Home() {
  const dispach = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstLastName: "",
      age: "",
      jobTitle: "",
    },
    onSubmit: (values) => {
      dispach(usersActions.addUser(values))
      console.log(values);
    },
  })
  console.log(formik);
  return (
    <HomePageWrapper>
      <UserForm onSubmit={formik.handleSubmit}>
        <UserFormName>Create User</UserFormName>
        <Input
          name="firstLastName"
          value={formik.values.firstLastName}
          labelName="First/Last name"
          onChange={formik.handleChange}
        />
        <Input
          name="age"
          value={formik.values.age}
          onChange={formik.handleChange}
          labelName="Age"
        />
        <Input
          name="jobTitle"
          value={formik.values.jobTitle}
          labelName="Job title"
          onChange={formik.handleChange}
        />
        <Button name="Create" type="submit" />
      </UserForm>
    </HomePageWrapper>
  )
}

export default Home
