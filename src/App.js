import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import "./Fonts/Font.css";
import Start from './pages/Start';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Sign from './pages/Sign';

export const TaskcySignedInContext = React.createContext();

function App() {
  const useIsSignedIn = useState(localStorage.getItem('isSignedIn') || false);
  const isSignedIn = useIsSignedIn[0];

  useEffect(() => {
    localStorage.setItem('isSignedIn', isSignedIn);
  }, [isSignedIn]);

  return (
    <TaskcySignedInContext.Provider value={useIsSignedIn}>
      <div className="App">
        <Routes>
          <Route path="/" element={isSignedIn ? <Home /> : <Start />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/home" element={<Home />} />
          <Route path="/sign" element={<Sign />} />
        </Routes>
      </div>
    </TaskcySignedInContext.Provider>
  );
}

export default App;