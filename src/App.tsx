import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import Users from "pages/Users"
import TodoList from "components/TodoList"

// import Homework29 from "homeworks/Homework29"
import Lesson30 from "lessons/Lesson30"
import Homework31 from "homeworks/Homework31"
import JokeGenerator from "components/JokeGenerator"

function App() {
  return (
    <>
      <GlobalStyles />
      <JokeGenerator />
      {/* <TodoList /> */}
      {/* <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout> */}
      {/* <Homework29 /> */}
      {/* <Lesson30 /> */}
      {/* <Homework31 /> */}
    </>
  )
}

export default App
