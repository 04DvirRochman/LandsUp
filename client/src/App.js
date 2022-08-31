import logo from './logo.svg';
import './App.css';
import SiteHeader from './cmps/SiteHeader'
import SiteFooter from './cmps/SiteFooter'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <SiteHeader/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
      </Routes>
      <SiteFooter/>
    </div>
  );
}

export default App;
