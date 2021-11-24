import {useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import './App.scss';
import SelectProject from './components/SelectProject';
import Signup from './components/Signup';
import ProjectDashboard from './components/ProjectDashboard';
import TicketPage from './components/TicketPage'
import PersistentDrawerLeft from './components/Navigation2.0'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SelectProject />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/navigation" element={<PersistentDrawerLeft />} />
        <Route path="/tickets" element={<TicketPage />} />
      </Routes>
      
    </div>
  );
}

export default App;
