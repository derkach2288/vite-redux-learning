import GlobalStyles from "styles/GlobalStyles"
import Layout from "components/Layout"
import { Route, Routes } from "react-router-dom"
import Home from "pages/Home"
import Users from "pages/Users"

// import Homework29 from "homeworks/Homework29"
import Lesson30 from "lessons/Lesson30"
import Homework31 from "homeworks/Homework31"

function App() {
  return (
    <>
      <GlobalStyles />
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/users" element={<Users />} />
          <Route path="*" element="Page is not found" />
        </Routes>
      </Layout>
      {/* <Homework29 /> */}
      {/* <Lesson30 /> */}
      {/* <Homework31 /> */}
    </>
  )
}

export default App
