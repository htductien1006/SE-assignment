//import logo from './logo.svg';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layouts/Layout';
import Tabs from './components/BackOfficerDashboard/BackOfficerDashboard'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Tabs />} />  
      </Routes>
    </Layout>
      
  );
}

export default App;
