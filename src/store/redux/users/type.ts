export interface AddUserPayload {
  firstLastName: string,
  age: string,
  jobTitle: string,
}
export interface User {
  firstLastName: string,
  age: string,
  jobTitle: string,
  id: string
}


export interface UsersState {
  users: User[]
}