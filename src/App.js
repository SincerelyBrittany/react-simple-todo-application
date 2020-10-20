import React from 'react';
// import logo from './logo.svg';
import Header from './Components/Header.js'
import ListContainer from './Components/ListContainer.js'
import Footer from './Components/Footer.js'
import './styles/App.css';

function App() {
  return (
    <div className="App">
      {/* <h1>Your List</h1> */}
      < Header />
      < ListContainer />
      < Footer />
    </div>
  );
}

export default App;
