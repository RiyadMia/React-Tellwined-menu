import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Priceing from './components/priceing/Priceing';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <h1 className='text-6xl text-orange-500'>Welcome to my priceing coub </h1>
      <Priceing></Priceing>
    </div>
  );
}

export default App;
