import { BrowserRouter, Routes, Route } from "react-router-dom"

//pages
import Login from "./pages/auth/Login"
import Error404 from "./pages/Error404"
import Register from "./pages/auth/Register"

//paginas de admin
import Home from "./pages/admin/Home"

function App() {

  return (
    <BrowserRouter >
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/registro" element={<Register/>} />
        <Route path="*" element={<Error404/> }/>
        <Route path="/home" element={Home} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
