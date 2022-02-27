import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages/Home';
import Crap from './pages/Crap';


function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/crap' element={<Crap/>} />
    </Routes>
    </Router>
  );
}

export default App;
