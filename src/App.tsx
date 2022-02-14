import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Movies from 'pages/Movies';
import Details from 'pages/Details';
import NotFound from 'pages/NotFound';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Movies />} />
          <Route path="/movie/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
