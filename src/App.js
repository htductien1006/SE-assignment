// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route }
    from 'react-router-dom';
import RouteList, {SpecRoute, RouteCreate} from './pages/route-management/route-management';
import VehicleAssign from './pages/vehicle-assign/vehicle-assign';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/route-management/"  element={<RouteList/>} />
          <Route exact path="/route-management/spec/:id"  element={<SpecRoute/>} />
          <Route exact path="/route-management/create"  element={<RouteCreate/>} />
          <Route exact path="/vehicle-assign"  element={<VehicleAssign/>} />
        </Routes>
      </BrowserRouter>
      {/* <header className="App-header">
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
      </header> */}
    </div>
  );
}

export default App;
