//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { BrowserRouter} from "react-router-dom";
import Layout from './Layouts/Layout';
import Tabs from './components/BackOfficerDashboard/BackOfficerDashboard'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Tabs />} />  
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
      
  );
}

export default App;
