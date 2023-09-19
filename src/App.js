import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sidebar from "./Components/Sidebar";
import Home from "./Pages/Home"
import ERR404 from "./Pages/ERR404";
import MovieDetails from "./Pages/MovieDetails";

export default function App() {
  return (
  <Router>
      <Sidebar/>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/data/:id' element={<MovieDetails/>}/>
      <Route path='' element={<ERR404/>}/>
    </Routes>
</Router>
  )
}