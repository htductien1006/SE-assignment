import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SpecRoute from "./pages/route-management/spec-route";
import RouteList from "./pages/route-management/route-list";
import VehicleAssign from "./pages/vehicle-assign/vehicle-assign";
import RouteCreate from "./pages/route-management/route-create";
import Login from "./pages/login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route exact path="/route-management/list" element={<RouteList />} />
          <Route exact path="/route-management/spec" element={<SpecRoute />} />
          <Route
            exact
            path="/route-management/create"
            element={<RouteCreate />}
          />
          <Route exact path="/vehicle-assign" element={<VehicleAssign />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
