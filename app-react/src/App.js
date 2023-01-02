import {BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home';
import ProductsList from './pages/products/ProductsList';
import CreateProducts from './pages/products/CreateProducts';
import UserList from './pages/user/UserList'
import './App.css';
import {Nav, Footer} from './components/components'



function App() {
  return (
    <>
      <BrowserRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/" index element={ <Home/> } />
          <Route path="/productList"  element={<ProductsList/>} />
          <Route path="/products/create"  element={<CreateProducts/>} />
          <Route path="/user/list"  element={<UserList/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
   
        
    </>
  );
}

export default App;
