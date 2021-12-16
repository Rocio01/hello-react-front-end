import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import  Greeting from './components/Greeting';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element= { <Home />} />
          <Route path="/greeting" element={ <Greeting /> } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
