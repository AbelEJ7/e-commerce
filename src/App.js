import {Routes,Route} from 'react-router-dom'
import Home from './routes/Home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './routes/sign-in/sign-in.component'
const Shope =()=>{
  return(
    <h1>This is shop page</h1>
  )
}
function App() {
  return  (
    <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shope />}/>
      <Route path='sign-in' element={<SignIn />}/>
    </Route>
    </Routes>
    
    )
}

export default App;
