//import logo from './logo.svg';
import './App.css';
import { Routes, Route} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Layout from './Layouts/Layout';
import AssignEmp from './pages/AssignMCPforEmployee/AssignMCPforJanitor'
import InfoMCP from './pages/infoMCP/InfoMCP'

function App() {
  return (
    // <Layout>
    //   <Routes>
    //     <Route path="/" element={<AssignEmp />} />  
    //     <Route path="/info" element={<InfoMCP />} /> 
    //   </Routes>
    // </Layout>
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AssignEmp />} /> 
          <Route path="/info" element={<InfoMCP />} /> 
        </Routes>
      </BrowserRouter>
    </div>  
  );
}

export default App;
