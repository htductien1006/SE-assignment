import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import SpecRoute from "./pages/route-management/spec-route";
// import RouteList from "./pages/route-management/route-list";
import VehicleAssign from "./pages/vehicle-assign/vehicle-assign";
// import RouteCreate from "./pages/route-management/route-create";
import Login from "./pages/login";
import StaffInfo from "./pages/staff-info";
import { CollectorList } from './components/Collector List';
import { JanitorList } from './components/Janitor List';
// import logo from './logo.svg';
import RouteList, {SpecRoute, RouteCreate} from './pages/route-management/route-management';
// import VehicleAssign from './pages/vehicle-assign/vehicle-assign';
import Tabs from './components/BackOfficerDashboard/BackOfficerDashboard'
import AssignEmp from './pages/AssignMCPforEmployee/AssignMCPforJanitor'
import InfoMCP from './pages/infoMCP/InfoMCP'

import JanitorCalendar from "./pages/JanitorCalendar";


function App() {
  // const action = useNavigationType();
  // const location = useLocation();
  // const pathname = location.pathname;

  // useEffect(() => {
  //   if (action !== "POP") {
  //     window.scrollTo(0, 0);
  //   }
  // }, [action]);

  // useEffect(() => {
  //   let title = "";
  //   let metaDescription = "";

  //   //TODO: Update meta titles and descriptions below
  //   switch (pathname) {
  //     case "/":
  //       title = "";
  //       metaDescription = "";
  //       break;
  //   }

  //   if (title) {
  //     document.title = title;
  //   }

  //   if (metaDescription) {
  //     const metaDescriptionTag = document.querySelector(
  //       'head > meta[name="description"]'
  //     );
  //     if (metaDescriptionTag) {
  //       metaDescriptionTag.content = metaDescription;
  //     }
  //   }
  // }, [pathname]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/staff-info" element={<StaffInfo />} />
          <Route exact path="/route-management/list" element={<RouteList />} />
          <Route exact path="/route-management/spec" element={<SpecRoute />} />
          <Route
            exact
            path="/route-management/create"
            element={<RouteCreate />}
          />
          <Route exact path="/vehicle-assign" element={<VehicleAssign />} />
          <Route path="/JanitorList" element={<JanitorList />} />
          <Route path="/CollectorList" element={<CollectorList />} />
          <Route exact path="/route-management/"  element={<RouteList/>} />
          <Route exact path="/route-management/spec/:id"  element={<SpecRoute/>} />
          <Route exact path="/route-management/create"  element={<RouteCreate/>} />
          <Route exact path="/vehicle-assign/:staffType"  element={<VehicleAssign/>} />
          <Route path="/dashBoard" element={<Tabs />} />  
          <Route path="/AssignEmployee" element={<AssignEmp />} /> 
          <Route path="/infoMCP" element={<InfoMCP />} /> 
          <Route path="/JanitorCalendar" element={<JanitorCalendar />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App;
