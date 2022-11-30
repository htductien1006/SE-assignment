import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import SpecRoute from './pages/route-management/spec-route';
import RouteList from './pages/route-management/route-list';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/route-management/list"  element={<RouteList/>} />
          <Route exact path="/route-management/spec"  element={<SpecRoute/>} />
        </Routes>
      </BrowserRouter>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
