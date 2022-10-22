import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Routes,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './component/Home/Home/Home';
import Login from './component/Login/Login';
import Booking from './component/Booking/Booking';
import PrivateRoute from './component/Login/PrivateRoute';
import AdminPanel from './component/AdminPanel/AdminPanel/AdminPanel';

export const userContext = createContext();

function App() {
  const [order,setOrder]= useState({})
  const [loggedInUser, setLoggedInUser]= useState({});
  // console.log(order);
  return (
  <userContext.Provider value = {[loggedInUser, setLoggedInUser]}>
   <Routes>
        <Route exact path="/">
            <Home order= {order} setOrder={setOrder}/>
        </Route>
        <Route path="/login" >
        <Login />
        </Route>
        <PrivateRoute path="/booking">
          <Booking order= {order} />
        </PrivateRoute>
        <PrivateRoute path="/admin">
          <AdminPanel></AdminPanel>
        </PrivateRoute>
    </Routes>
  </userContext.Provider> 
  );
}

export default App;
