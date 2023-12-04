import { Route, Routes} from 'react-router-dom'

// Pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';

// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <Routes>
      <Route path='/' element={<h1>Home</h1>}/>
      <Route path='/register' element={<RegisterPage />}/>
      <Route path='/login' element={<LoginPage />}/>
    </Routes>
  );
}

export default App;
