import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation/navigation.component';
import CheckOut from './routes/checkout/checkout.component';
import Authenticaion from './routes/authentication/authentication.component';
import Shope from './routes/shop/shope.component';

function App() {
  return  (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shope />}/>
      <Route path='auth' element={<Authenticaion />}/>
      <Route path='checkout' element={<CheckOut />} />
    </Route>
    </Routes> 
    
    )
}

export default App;
