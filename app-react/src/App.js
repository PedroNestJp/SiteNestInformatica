import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateProduct from './pages/product/CreateProduct'
import ListProducts from './pages/product/ListProducts'
import EditProduct from './pages/product/EditProduct'
import ListUser from './pages/user/ListUser'
import CreateUSer from './pages/user/CreateUser'
import UpdateUser from './pages/user/UpdateUser'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' index  element={<Home />} />
          <Route path='/products' element={<ListProducts />} />
          <Route path='/products/create' element={<CreateProduct />} />
          <Route path='/product/update/:id' element={<EditProduct />} />
          <Route path='/product/delete/:id' element={<EditProduct />} />
          <Route path='/users' element={<ListUser/>} />
          <Route path='/user/create' element={<CreateUSer/>} />
          <Route path='/user/update/:id' element={<UpdateUser/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}


export default App;