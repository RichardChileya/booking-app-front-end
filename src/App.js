import './App.css';
import React from 'react';
import AppRouter from './routers';
import Header from './components/Header';

function App() {
  return (
    <div className="row">
      <div className="col-md-3 side-bar">
        <Header />
      </div>
      <div className="col-md-9 offset-md-3 main-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
