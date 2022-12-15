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
import { TaskInformation } from "./components/TaskInformation/taskInformation";
import { EditTask } from "./components/EditTask/editTask";
import CollectorCalendar from "./pages/CollectorCalendar/CollectorCalendar";

import JanitorCalendar from "./pages/JanitorCalendar/JanitorCalendar";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/staff-info" element={<StaffInfo />} />
          <Route path="/janitor-list" element={<JanitorList />} />
          <Route path="/collector-list" element={<CollectorList />} />
          <Route exact path="/route-management/"  element={<RouteList/>} />
          <Route exact path="/route-management/spec/:id"  element={<SpecRoute/>} />
          <Route exact path="/route-management/create"  element={<RouteCreate/>} />
          <Route exact path="/vehicle-assign/:staffType"  element={<VehicleAssign/>} />
          <Route path="/dashboard" element={<Tabs />} />  
          <Route path="/assign-employee" element={<AssignEmp />} /> 
          <Route path="/infoMCP" element={<InfoMCP />} /> 
          <Route path="/janitor-calendar" element={<JanitorCalendar />} />
          <Route path='/collector-calendar' element={<CollectorCalendar/>}/>
          <Route path='/task-info' element={<TaskInformation/>}/>
          <Route path='/edit-task' element={<EditTask/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
  }

export default App;
