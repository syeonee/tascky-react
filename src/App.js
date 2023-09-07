import { Route, Routes } from 'react-router-dom';

import './App.css';
import Start from './pages/Start';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Start />} />
      </Routes>
    </div>
  );
}

export default App;
