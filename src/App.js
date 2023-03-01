import './App.css';
import Navbar from './components/Navbar'
import About  from './components/About';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <CardGroup /> */}
      {/* <Textform heading="Kuchh toh likh" /> */}
      <About/>
    </div>
  );
}

export default App;
