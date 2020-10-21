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
        isLoggedIn: false
    }
  }

  // componentDidMount(){
  //   setTimeout(() => {
  //     this.setState({
  //       isLoading: false
  //     })
  //   }, 3000)
  // }

  handleClick = () => {
    console.log("I am working ")
    this.setState(prevState => {
      return{
        isLoggedIn: !prevState.isLoggedIn
      }
    })
  }

  render(){
    let buttonText = this.state.isLoggedIn ? "Log Out" : "Log In "

    return(  
      <div>
         <button onClick={this.handleClick}> {buttonText}</button>
      {this.state.isLoggedIn
      ? 
              <div className="App">
                  < Header />
                  < ListContainer /> 
                  < Footer /> 
              </div>
      :
                  <h1> Please Log In </h1>
      }
      </div>)
  }
}

export default App;
