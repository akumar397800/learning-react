import React  from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import img from './user7.jpeg'
// import img2 from './assets/images/user13.jpg'
// import Card from './components/Card';
import CardGroup from './components/CardGroup';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <div>
      {/* <Card Image={img} Heading=<h1>ID- Card</h1> name="Ankit Kumar" desc="A handsome and charming college student." /> */}
      <CardGroup />
     </div>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

