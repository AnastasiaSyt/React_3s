import ErrorPage from './pages/ErrorPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Layout from './components/Layout';
import { CardData } from './cards_data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main cards={CardData} />} />
          <Route path="main" element={<Main cards={CardData} />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
