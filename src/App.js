import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Greeting from './components/Greeting';
import Home from './components/Home';
import store from './redux/configureStore';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/greeting" element={<Greeting />} />
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
