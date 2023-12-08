import { Route, Routes} from 'react-router-dom'

// Components
import MyNavbar from './components/Navbar';


// Pages
import RegisterPage from './pages/Register';
import LoginPage from './pages/Login';
import ListingPage from './pages/List';
import HomePage from './pages/Home';
import BookDetailPage from './pages/Detail';
import OrdersPage from './pages/ViewOrder';
 


// CSS
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'


function App() {
  return (
    <div>
        <MyNavbar />
        <Routes>
          <Route path='/' element={<HomePage />}/>
          <Route path='/register' element={<RegisterPage />}/>
          <Route path='/login' element={<LoginPage />}/>
          <Route path='/book/list' element={<ListingPage />}/>
          <Route path='/book/orders' element={<OrdersPage />}/>
          <Route path='/books/view/:bookId' element={<BookDetailPage />}/>
        </Routes>
    </div>
    
  );
}

export default App;
