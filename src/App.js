import { render } from '@testing-library/react';
import React from 'react';
import ReactDOm from 'react-dom';
import './App.css';
import New from './New';

class Product1 extends React.Component {
  render() {
    return(
      <div className="Product1">
        <h2>Price: 98 lakh</h2>
        <img src="/images/item1.jpg" height="200px" width="250px" alt=""></img>
        <button className="button">Buy Now</button>
      </div>
    );
  }
}

class Product2 extends React.Component {
  render() {
    return(
      <div className="Product2">
        <h2>Price: 20 lakh</h2>
        <img src="/images/item2.jpg" height="200px" width="250px" alt=""></img>
        <button className="button">Buy Now</button>
      </div>
    );
  }
}

class Product3 extends React.Component {
  render() {
    return(
      <div className="Product3">
        <h2>Price: 25 lakh</h2>
        <img src="/images/item3.jpg" height="200px" width="250px" alt=""></img>
        <button className="button">Buy Now</button>
      </div>
    );
  }
}

class Product4 extends React.Component {
  render() {
    return(
      <div className="Product4">
        <h2>Price: 52 lakh</h2>
        <img src="/images/item4.jpg" height="200px" width="250px" alt=""></img>
        <button className="button">Buy Now</button>
      </div>
    );
  }
}

class Product5 extends React.Component {
  render() {
    return(
      <div className="Product5">
        <h2>Price: 38 lakh</h2>
        <img src="/images/item5.jpg" height="200px" width="250px" alt=""></img>
        <button className="button">Buy Now</button>
      </div>
    );
  }
}

class Product6 extends React.Component {
  render(){
    return(
      <div>
       <div className="Product6">
         <h2>Price: 49 lakh</h2>
         <img src="/images/item5.jpg" height="200px" width="250px" alt=""></img>
         <button className="button">Buy Now</button>
       </div>
       <div>

       </div>
       </div>
    );
  }
}

const Redirect = () => {
  render(
    <New />
  );
}
var myWindow;
function openWin() {
  myWindow = window.open("", "myWindow", "width=1580,height=1200");
  <New />
 
}

function App() {
  return (
    <div className="Main">
    <div className="App">
      <h1 className="heading1">E-Commerce Website</h1>
    </div>
    <img src="/images/item6.jpg" width="100%" height="400px" alt=""></img>
    <div className="box">
       <h1>...</h1>
       <h1 className="heading2">SAVING UP TO 60%</h1>
       <button className="button1" onClick={openWin}>Learn More</button>
    </div>
    <div className="Row">
      <Product1 />
      <Product2 />
      <Product3 />
      <Product4 />
      <Product5 />
    </div>
    <div className="Row">
      <Product6 />
      <New />
    </div>  
    </div>
  );
}

export default App;
