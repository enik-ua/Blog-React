import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const FB = Object.getOwnPropertyDescriptor(window,"FB");
  const [login,setLogin]=useState();
  let token;

  FB.value.init({
    appId      : '214407322793199',
    cookie     : true,
    xfbml      : true,
    version    : 'v12.0'});

  return (
    <div className="App">
      {!login && <button className="signInWithFacebook" onClick={signInWithFacebook} >Sign in with Facebook</button>}
      <header className="App-header">
          

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  function signInWithFacebook() {
    debugger
    const me = this;
    const FB = Object.getOwnPropertyDescriptor(window,"FB");
    FB.value.login(
      function(response){
        if (response.authResponse) {
          token = response.authResponse.accessToken;
          setLogin(Number(response.authResponse.userID));
        }else{

        }          
      },
      {scope: 'public_profile,email'});
  }
}

export default App;
