import { Route, Routes} from 'react-router-dom'

// Components
import MyNavbar from './components/Navbar';


// Pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ListingPage from './pages/List';



// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import HomePage from './pages/Home';


function App() {
  return (
    <div>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/book/list' element={<ListingPage />}/>
        </Routes>
    </div>
    
  );
}

export default App;
