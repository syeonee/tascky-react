import React, { useEffect, useState } from "react";
import { Route, Routes } from 'react-router-dom';

import './App.css';
import "./Fonts/Font.css";
import Start from './pages/Start';
import Onboarding from './pages/Onboarding';
import Home from './pages/Home';
import Sign from './pages/Sign';
import TabNavigator from "./components/TabNavigator";
import Calendar from "./pages/Calendar";
import AddTask from "./pages/AddTask";

export const TaskcySignedInContext = React.createContext();

function App() {
  const useIsSignedIn = useState(localStorage.getItem('isSignedIn') || false);
  const isSignedIn = Boolean(useIsSignedIn[0]);

  useEffect(() => {
    localStorage.setItem('isSignedIn', isSignedIn);
  }, [isSignedIn]);

  return (
    <TaskcySignedInContext.Provider value={useIsSignedIn}>
      <div className="App">
        <Routes>
          <Route path="/" element={isSignedIn ? <Home /> : <Start />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/sign" element={<Sign />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/add" element={<AddTask />} />
        </Routes>
        {isSignedIn && <TabNavigator />}
      </div>
    </TaskcySignedInContext.Provider>
  );
}

export default App;
