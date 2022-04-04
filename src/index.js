import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


function Header(){
  return (
    <header>
        <nav className="nav">
          <img src= "../logo192.png" />
          <ul className = "nav-items">
            <li> Price </li>
            <li> About</li>
            <li> Contact</li>

          </ul>
        </nav>
    </header>
  )
}

function Footer(){
  return (
    <footer>
      <small>Copy Development</small>
    </footer>
  )
}

function MainContent(){
  return (
    <div>
        <h1>Fun facts about React</h1>
        <ul>
          <li>Hello</li>
          <li>world</li>
          <li>Ho</li>
          <li>Dinh</li>
          <li>Dung</li>
        </ul>
    </div>
  )
}
function Page(){
  return (
    <div>
        <Header/>
        <MainContent/>
        <Footer/>
    </div>
  )
}
ReactDOM.render(<Page />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
