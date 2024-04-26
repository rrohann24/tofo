import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import TodoPage from './components/TodoPage';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<LoginPage/>}/>
      <Route path='/todo' element={<TodoPage/>}/>
    </Routes>
    </>
    
  );
}

export default App;
