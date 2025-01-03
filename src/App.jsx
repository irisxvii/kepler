import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from './pages/Details'
import Explorer from './pages/Explorer'
import Home from './pages/Home'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/explorer' element={<Explorer />}/>
        <Route path='/details' element={<Details />}/>
      </Routes>
    </Router>
  )
}

export default App
