import ErrorPage from './pages/ErrorPage';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Main from './pages/Main';
import Layout from './components/Layout';
import Form from './pages/Form';
import './styles/Form.css';
import './styles/Card.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="main" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route
            path="form"
            element={
              <Form
                titleRef={React.createRef()}
                dateRef={React.createRef()}
                publishRef={React.createRef()}
                authorRef={React.createRef()}
                fileRef={React.createRef()}
              />
            }
          />
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
