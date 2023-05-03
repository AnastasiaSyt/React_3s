import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Main from './pages/Main';
import About from './pages/About';
import Form from './pages/Form';
import './styles/Form.css';
import './styles/Card.css';
import './index.css';

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="main" element={<Main />} />
        <Route path="about" element={<About />} />
        <Route
          path="form"
          element={
            <Form
            //   titleRef={React.createRef()}
            //   dateRef={React.createRef()}
            //   publishRef={React.createRef()}
            //   authorRef={React.createRef()}
            //   fileRef={React.createRef()}
            />
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
