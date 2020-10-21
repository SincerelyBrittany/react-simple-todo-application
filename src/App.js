import React, {Component} from 'react';
// import logo from './logo.svg';
import Header from './Components/Header.js'
import ListContainer from './Components/ListContainer.js'
import Footer from './Components/Footer.js'
import './styles/App.css';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }

  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 3000)
  }

  render(){
  return (
    <div className="App">
      {/* <h1>Your List</h1> */}
      < Header />
      {this.state.isLoading ? 
      <h1> Loading </h1> :
      < ListContainer />
      }
      < Footer />
    </div>
  );
  }
}

export default App;
