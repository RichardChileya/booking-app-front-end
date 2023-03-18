import './App.css';
import React from 'react';
import AppRouter from './routers';
import Header from './components/Header';

function App() {
  return (
    <div className="row">
      <Header />
      <div className="col-md-10 offset-md-2 main-content">
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
