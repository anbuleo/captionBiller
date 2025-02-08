import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
import SignUp from './Pages/SignUp'
import SignIn from './Pages/SignIn'
import ProtectedRoute from './common/ProtectedRoute'
import Home from './Pages/Home'
import AuthContext from './Context/AuthContext'
import Footer from './components/Footer'
import Product from './Pages/Product'
import CreateProduct from './Pages/CreateProduct'
import AddBarCode from './Pages/AddBarCode'
import EditProduct from './Pages/EditProduct'
import BarCodeContext from './Context/BarCodeContext'
import CreateCoustomer from './Pages/CreateCoustomer'
import InstaBiller from './Pages/InstaBiller'
import Sale from './Pages/Sale'
import Customer from './Pages/Customer'
import BalanceCreate from './Pages/BalanceCreate'
import BarCodePrinter from './Pages/BarCodePrinter'


function App() {
 

  return (
    <>
      <BrowserRouter>
      
      
      <Routes>
      <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<SignIn />} />
        <Route  path='*' element={<Navigate to='/' />}/>
        <Route path='/home' element={<ProtectedRoute><AuthContext><Nav/><Home/> <Footer /></AuthContext></ProtectedRoute>}/>
        <Route path='/barcodeprint' element={<ProtectedRoute><AuthContext><Nav/><BarCodePrinter/> <Footer /></AuthContext></ProtectedRoute>}/>
        <Route path='/customer' element={<ProtectedRoute><AuthContext><Nav/><Customer/> <Footer /></AuthContext></ProtectedRoute>}/>
        <Route path='/createbalancesheet' element={<ProtectedRoute><AuthContext><Nav/><BalanceCreate/> <Footer /></AuthContext></ProtectedRoute>}/>
        <Route path='/sale' element={<ProtectedRoute><AuthContext><Nav/><Sale/> <Footer /></AuthContext></ProtectedRoute>}/>
        <Route path='/product' element={<ProtectedRoute><AuthContext><Nav/><Product /></AuthContext></ProtectedRoute>}/>
        <Route path='/createproduct' element={<CreateProduct />} />
        <Route path='/addbarcode' element={<AddBarCode />}/>
        <Route path='/editproduct/:id' element={<EditProduct />}/>
        <Route path='/createcustomer' element={<CreateCoustomer />} />
        <Route path='/instabiller'  element={<ProtectedRoute><AuthContext><Nav/><InstaBiller /></AuthContext></ProtectedRoute>}/>
      </Routes>
     
      </BrowserRouter>
    </>
  )
}

export default App
