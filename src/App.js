import React from 'react';
import { Outlet, Routes, Route } from 'react-router-dom';
import './App.css';
import MentorList from './components/booking/MentorList';
import SideBar from './components/sidebar/SideBar';

const SideLayout = () => (
  <>
    <SideBar />
    <Outlet />
  </>
);

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<SideLayout />}>
          <Route path="/" element={<MentorList />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
