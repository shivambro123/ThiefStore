import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import AppBarComp from './Component/AppBar/AppBarComp';
import Data from './Component/AppBar/Data/Data';
import ContextComp from './Component/AppBar/Context/ContextComp';
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';
import MainPage from './Component/AppBar/Main/MainPage';
import Men from './Component/Men/Men';
import Women from './Component/Women/Women';
import NaturalComp from './Component/Natural/NaturalComp';
import Grocery from './Component/Grocery/Grocery';
import Cart from './Component/Cart/Cart';
function App() {
  console.log('hh ')
  return (
    <div className="App">
      <ContextComp>
      <Router>
      <AppBarComp/>
        <Routes>
          <Route path='/' element={<MainPage/>}/>
          <Route path="/smartphones" element={<Men/>}/>
          <Route path="/laptop" element={<Women/>}/>
          <Route path="/natural" element={<NaturalComp/>}/>
          <Route path="/grocery" element={<Grocery/>}/>
          <Route path="/cart" element={<Cart/>}/>
          
    </Routes>
    </Router>
    </ContextComp>  
    {/* <Data/> */}
    </div>
  );
}

export default App;
