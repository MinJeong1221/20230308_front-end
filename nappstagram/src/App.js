import { Route,  Routes } from 'react-router-dom';
import Auth from './components/pages/Auth';
import SignupForm from './components/login/SignupForm';
import Loginform from './components/login/Loginform';
import Home from './components/pages/Home';
import Post from './components/pages/Post';
import Profil from './components/pages/Profil';
import Public from './components/pages/Public';

function App() {
  return (
    <>
    <Routes>
      
      <Route  path='/auth' element={<Auth/>}>
        <Route path='login' element={<Loginform/>}/>
        <Route path='signup' element={<SignupForm/>}/>
      </Route>
      <Route path='/' element={<Public/>}>
        <Route path=''element={<Home/>}/>
        <Route path='post'element={<Post/>}/>
        <Route path='profil'element={<Profil/>}/>
      </Route>
    </Routes>
    </>
    
  );
}

export default App;
