import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';

import Home from './pages/home/Home'
import About from './pages/about/About'
import Product from './pages/granite/Granite'

import Service from './pages/service/Service'
import Contact from './pages/contact/Contact'
import Order from './components/Gproduct/Product/Order'
import Login from './components/Login'
import Form from './components/form'

import AdminLogin from './adminboard/AdminLogin'
import Main from './adminboard/Main'
import Users from './adminboard/users/Users'
import Supplier from './adminboard/supplier/Supplier'
import ADProduct from './adminboard/adminproduct/Aproduct'
import ADOrder from './adminboard/adminorder/Aorder'


import './App.css';
import UAddEdit from './adminboard/users/AddEdit';
import Uupdate from './adminboard/users/AddEdit'
import UView from './adminboard/users/View';

import Sview from './adminboard/supplier/View'
import Supdate from './adminboard/supplier/AddEdit'
import SAddEdit from './adminboard/supplier/AddEdit'

import Fservice from './adminboard/service/Service'
import Fview from './adminboard/service/View'

import Ffeedback from './adminboard/feedback/feedback'
import Feedview from './adminboard/feedback/View'

import BookForm from './adminboard/booking/booking'
import BookView from './adminboard/booking/bookview'

import AdpdtView from './adminboard/adminproduct/Adview'
import Adupdate from './adminboard/adminproduct/AddEdit'
import AdAddEdit from './adminboard/adminproduct/AddEdit'

import Aorderview from './adminboard/adminorder/Aorderview'
import AorderAddEdit from './adminboard/adminorder/AddEditorder'


//REPORT

import PurchaseReport from './adminboard/reports/Purchasereport'
import OrderReport from './adminboard/reports/Orderreport'
import BookingReport from './adminboard/reports/Bookingreport'


function App() {

  const [supp,setSupplier] = useState([])


  const loadSupplier = useCallback(async()=>{
    const response = await axios.get("http://localhost:5000/api/get/supplier");
    setSupplier(response.data);
  },[setSupplier])


  useEffect(()=>{
    loadSupplier();
  },[loadSupplier])

  return (
    <BrowserRouter>
      <ToastContainer position='top-center'/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='order' element={<Order/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='service' element={<Service/>}/>
        <Route path='contact' element={<Contact/>}/>
        <Route path='signup' element={<Form/>}/>


        <Route path='/admin' element={<AdminLogin/>}/>
        <Route path='/admindashboard' element={<Main/>}/>
        <Route path='/user' element={<Users/>}/>
        <Route path='/supplier' element={<Supplier/>}/>
        <Route path='/adminproduct' element={<ADProduct/>}/>
        <Route path='/adminorder' element={<ADOrder/>}/>

        <Route path='/caddcontact' element={<UAddEdit/>}/>
        <Route path='/cupdate/:id' element={<Uupdate/>}/>
        <Route path='/cview/:id' element={<UView/>}/>

        <Route path='/sview/:id' element={<Sview/>}/>
        <Route path='/supdate/:id' element={<Supdate/>}/>
        <Route path='/saddcontact' element={<SAddEdit/>}/>

        <Route path='/serviceform' element={<Fservice/>}/>
        <Route path='/serviceform/:id' element={<Fview/>}/>

        <Route path='/feedform' element={<Ffeedback/>}/>
        <Route path='/feedform/:id' element={<Feedview/>}/>

        <Route path='/bookform' element={<BookForm/>}/>
        <Route path='/bookform/:id' element={<BookView/>}/>

        <Route path='/adproductview/:id' element={<AdpdtView/>}/>
        <Route path='/adproductupdate/:id' element={<Adupdate/>}/>
        <Route path='/adproductadd' element={<AdAddEdit supp={supp}/>}/>

        <Route path='/orderview/:id' element={<Aorderview/>}/>
        <Route path='/orderadd' element={<AorderAddEdit/>}/>


        {/* REPORT */}
        <Route path='/purchasereport' element={<PurchaseReport/>}/>
        <Route path='/orderreport' element={<OrderReport/>}/>
        <Route path='/bookingreport' element={<BookingReport/>}/>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
