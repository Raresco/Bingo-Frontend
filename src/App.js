import './App.css';
import TableComponent from './components/TableComponent'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'; // Import your Home Page component
import ShowUsersPage from './pages/ShowUsersPage'; // Import your ShowUsers Page component
import ShowDefaultPhrasesPage from './pages/ShowDefaultPhrasesPage';
import ShowCustomPhrasesPage from './pages/ShowCustomPhrasesPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/ShowUsers" element={<ShowUsersPage />} />
        <Route exact path="/ShowDefaultPhrases" element={<ShowDefaultPhrasesPage />} />
        <Route exact path="/ShowCustomPhrases" element={<ShowCustomPhrasesPage />} />
        <Route exact path="/Login" element = {<LoginPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
