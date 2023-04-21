
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
import View from './Component/ViewData/View';
import LoginComp from './Component/Login/LoginComp';
import ProtectedRoute from './Component/Auth/ProtectedRoute';
import PublicRoute from './Component/Auth/PublicRoute';
import NewCart from './Component/Cart/NewCart';
function App() {
  console.log('hh ')
  return (
    <div className="App">
      <ContextComp>
      <Router>
      <AppBarComp/>
        <Routes>
          <Route path="/" element={<ProtectedRoute><LoginComp/></ProtectedRoute> }/>
          <Route path='/mainpage' element={<PublicRoute><MainPage/></PublicRoute>}/>
          <Route path='/ThiefStore' element={<ProtectedRoute><MainPage/></ProtectedRoute>}/>
          <Route path="/smartphones" element={<ProtectedRoute><Men/></ProtectedRoute>}/>
          <Route path="/laptop" element={<ProtectedRoute><Women/></ProtectedRoute>}/>
          <Route path="/natural" element={<ProtectedRoute><NaturalComp/></ProtectedRoute>}/>
          <Route path="/grocery" element={<ProtectedRoute><Grocery/></ProtectedRoute>}/>
          <Route path="/products/:id" element={<View/>}/>
          <Route path="/cart" element={<ProtectedRoute><Cart/></ProtectedRoute>}/>
          <Route path="/view" element={<ProtectedRoute><View/></ProtectedRoute>}/>
          <Route path="/login" element={<PublicRoute><LoginComp/></PublicRoute>}/>
        
    </Routes>
    </Router>
    </ContextComp>  
    {/* <Data/> */}
    </div>
  );
}

export default App;
