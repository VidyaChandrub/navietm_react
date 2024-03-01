import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import MainLayout from './components/MainLayout';
import Home from './components/pages/Home';
import MultiStepForm from './components/dummy/MultiStepForm';


function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<MainLayout/>}>
            <Route index element={<Home/>}/>
          </Route>
        </Routes>
      </Router>
      {/* <MultiStepForm/> */}

    </div>
  );
}

export default App;
