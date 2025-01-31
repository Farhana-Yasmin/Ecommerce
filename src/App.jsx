
import Contact from './Pages/Contact'
import About from './Pages/About'

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider,} from "react-router-dom";
import RootLayout from './Components/RootLayout'
import Shop from './Pages/Shop';
import Blog from './Pages/Blog';
import Products from './Pages/Products';
import Pages from './Pages/Pages';
import Home from './Pages/Home';
import MyAccount from './Pages/MyAccount';
import Registration from './Pages/Registration';
import ShopLeftSide from './Components/ShopLeftSide';



function App() {

  let myRouter = createBrowserRouter(createRoutesFromElements(
    <Route element={<RootLayout/>} >
      <Route path='/' element= {<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/products' element={<Products/>} />
      <Route path='/blog' element={<Blog/>} />
      <Route path='/shop' element={<Shop/>} />
      <Route path='/pages' element={<Pages/>} />
      <Route path='/MyAccount' element={<MyAccount/>} />
      <Route path='/Registration' element={<Registration/>} />
      <Route path='/ShopLeftSide' element={<ShopLeftSide/>} />

   
     
    </Route>

  ))


  return (
    <>
     <RouterProvider router={myRouter}/>
   
    </>
  )
}

export default App
