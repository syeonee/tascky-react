import { Route, Routes } from 'react-router-dom';

import './App.css';
import Start from './pages/Start';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
