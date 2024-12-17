import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './components/Auth';
import Register from './components/Register';
import Main from './components/Main';
import Header from './components/Header'; // Импортируем хедер

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