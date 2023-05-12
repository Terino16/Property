import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Sweet from './Pages/Sweet';


function App() {
  return (
    <div className="App">
     <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/sweet" element={<Sweet/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
