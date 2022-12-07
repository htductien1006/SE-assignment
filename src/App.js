// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CollectorList } from './components/Collector List';
import { JanitorList } from './components/Janitor List';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/JanitorList" element={<JanitorList />} />
          <Route path="/CollectorList" element={<CollectorList />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
