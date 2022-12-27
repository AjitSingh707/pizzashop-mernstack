import React from 'react'
import Topbar from './component/Topbar'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import About from './component/About'
import Contact from './component/Contact'
import Policy from './component/Policy'
import Navbarm from './component/Navbarm'
import { Homescr } from './screen/Homescr'
import Cartscr from './screen/Cartscr'
import Registerscr from './screen/Registerscr'
import Loginscr from './screen/Loginscr'
import Orderscr from './screen/Orderscr'
import Adminscr from './screen/Adminscr'
import Userlist from './component/admin/Userlist'
import Addnewpizaa from './component/admin/Addnewpizaa'
import Orderlist from './component/admin/Orderlist'
import Pizzalist from './component/admin/Pizzalist'
import Editpage from './component/admin/Editpage'
import Errorscr from './screen/Errorscr'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Topbar/>
    <Navbarm/>
    <Routes>
      <Route path='/' element={<Homescr/>}/>
      <Route path='/admin' element={<Adminscr/>}>
        <Route index element={<Userlist/>}/>
        <Route path='userlist' element ={<Userlist/>}/>
        <Route path='pizzaslist' element ={<Pizzalist/>}/>
        <Route path='orderlist' element ={<Orderlist/>}/>
        <Route path='addnewpizza' element ={<Addnewpizaa/>}/>
      </Route>
      <Route  path='editpage/:pizzaId' element={<Editpage/>}/>
      <Route path='order' element = {<Orderscr/>}/>
      <Route path='register' element={<Registerscr/>}/>
      <Route path='login' element={<Loginscr/>}/>
      <Route path='cart' element={<Cartscr/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='policies' element={<Policy/>}/>
      <Route path='*' element = {<Errorscr/>}/>
    </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
