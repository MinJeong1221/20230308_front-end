import { Route,  Routes } from 'react-router-dom';
import Auth from './components/pages/Auth';
import SignupForm from './components/login/SignupForm';
import Loginform from './components/login/Loginform';

function App() {
  return (
    <Routes>
      <Route  path='/auth' element={<Auth/>}>
        <Route path='login' element={<Loginform/>}/>
        <Route path='signup' element={<SignupForm/>}/>
      </Route>
    </Routes>
  );
}

export default App;
