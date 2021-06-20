
import './App.css';
import Home from './componunts/HomePage/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './componunts/HomePage/Header/Header';
import Footer from './componunts/HomePage/Footer/Footer';
import ContactFrom from './componunts/HomePage/ContactFrom/ContactFrom';
import AboutUs from './componunts/HomePage/AboutUs/AboutUs';
import ServiceDeatils from './componunts/HomePage/ServiceDeatils/ServiceDeatils';

//User Panel
import BookingList from './componunts/UserDeshBord/UserDetails/BookingLIst/BookingList';
import BookingNow from './componunts/UserDeshBord/UserDetails/BookingNow/BookingNow';
import Review from './componunts/UserDeshBord/UserDetails/Review/Review';

import PrivateRoute from './componunts/PrivateRoute';
//Addmin Panel
import ManageServices from './componunts/UserDeshBord/AdminDetails/ManageServices/ManageServices';
import MakeAdmin from './componunts/UserDeshBord/AdminDetails/MakeAdmin/MakeAdmin';
import AddServices from './componunts/UserDeshBord/AdminDetails/AddServices/AddServices';
import OrderList from './componunts/UserDeshBord/AdminDetails/OrderList/OrderList';

import Loging from './componunts/Loging/Loging';
import { createContext, useState } from 'react';
import AllService from './componunts/HomePage/Service/AllService/AllService';
import LogingDigine from './componunts/Loging/LogingDigine';
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});

  const [admin, setAdmin ]=useState(false)
  return (
    <userContext.Provider value={{ user, setUser, admin, setAdmin}}>
    <Router>
      <Switch>
        <Route exact path="/">
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path="/home">
          <Header></Header>
          <Home></Home>
          <Footer></Footer>
        </Route>
        <Route path="/about">
          <Header></Header>
          <AboutUs></AboutUs>
          <Footer></Footer>
        </Route>
        <Route path="/service">
          <Header></Header>
          <AllService/>
      
          <Footer></Footer>
        </Route>

        <PrivateRoute path="/dashbord">
        
        {admin ? (
              <BookingList></BookingList>
        ):(
            <ManageServices></ManageServices>
        )}          
          
        </PrivateRoute >
        <PrivateRoute  path="/bookingNow">          
          <BookingNow></BookingNow>
        </PrivateRoute >        
        <Route path="/bookingList">          
          <BookingList></BookingList>
        </Route>
        <Route path="/review">           
          <Review></Review>
        </Route>
        <PrivateRoute  path="/buyProcuct/:id">          
          <BookingNow></BookingNow>
        </PrivateRoute >
        <Route path="/contact">
          <Header></Header>
          <ContactFrom></ContactFrom>
          <Footer></Footer>
        </Route>
        <Route path="/orderList">
          <OrderList></OrderList>
        </Route>
        <Route path="/addServices">
          <AddServices></AddServices>
        </Route>
        <Route path="/makeadmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/manageServices">
          <ManageServices></ManageServices>
        </Route>
        <Route path="/about">
          <Header></Header>
          <ServiceDeatils></ServiceDeatils>
          <Footer></Footer>
        </Route>
        <Route path="/logIng">
          <Header></Header>
          <Loging></Loging>         
        </Route>
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
