import React, { useState } from 'react';
import './App.css';
import Content from './components/Layout/Content/Content';
import Footer from './components/Layout/Footer/Footer';
import Header from './components/Layout/Header/Header';

function App() {
  const [page, setPage] = useState('Home')
  return (
    <div className="App">
      <Header page={page} setPage={setPage}/>
          <Content setPage={setPage} page={page}/>
      <Footer />
    </div>
  );
}

export default App;
