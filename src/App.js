import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth/Auth';
import Register from './components/Register/Register';
import Main from './components/Main/Main';
import Header from './components/Header/Header'; // Импортируем хедер

function App() {
  return (
    <Router>
      <Header /> {/* Добавляем хедер здесь */}
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/main" element={<Main />} />
        <Route path="/" element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default App;