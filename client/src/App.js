import logo from './logo.svg';
import './App.css';


import MainWebsite from './pages/MainWebsite';



function App() {
  localStorage.setItem("userConnected",'000000');
  return (
    <div className="App">
      <MainWebsite/>
    </div>
  );
}

export default App;
