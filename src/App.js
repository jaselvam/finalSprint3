import React from 'react';
//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Link, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ListSchedulerComponent from './components/ListSchedulerComponent';
import CreateSchedulerComponent from './components/CreateSchedulerComponent';
import UpdateSchedulerComponent from './components/UpdateSchedulerComponent';
import ViewSchedulerComponent from './components/ViewSchedulerComponent';
import ProductList from './components/ProductList';
import ViewProductComponent from './components/ViewProductComponent';
import UpdateProductComponent from './components/UpdateProductComponent';
import CreateProduct from './components/CreateProduct';
import ListAdmin from './components/ListAdmin';
import UpdateAdmin from './components/UpdateAdmin';
import ViewAdmin from './components/ViewAdmin';
import ListCustomerComponent from './components/ListCustomerComponent';
import ViewCustomerComponent from './components/ViewCustomerComponent';
import UpdateCustomerComponent from './components/UpdateCustomerComponents';
import LoginComponent from './components/LoginComponent';
import CreateCustomer from './components/CreateCustomer';
import Dashboard from './components/Dashboard';
import ListContractComponent from './components/ListContractComponent';
import CreateContract from './components/CreateContract';
import ViewContractComponent from './components/ViewContractComponent';
import UpdateContractComponent from './components/UpdateContractComponent';
import LandList from './components/LandList';
import CreateLand from './components/CreateLand';
import ViewLand from './components/ViewLand';
import UpdateLand from './components/UpdateLand';
import ListOrder from './components/ListOrder';
import CreateOrder from './components/CreateOrder';
import ViewOrder from './components/ViewOrder';
import UpdateOrder from './components/UpdateOrder';


function App() {             //link component is used to navigate around the application
  return (
    <div>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <a href="/user" className='navbar-brand'>Forest Management System</a>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/user"} className="nav-link">   
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/Dashboard"} className="nav-link">
                DashBoard
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/customers"} className="nav-link">
                Admin Access
              </Link>
            </li>
          </div>
        </nav>
  
        <div className="container">
          <Switch>
          <Route path = "/user"  component = {LoginComponent}></Route>
          <Route path = "/add"  component = {CreateCustomer}></Route>
          <Route path = "/Dashboard" component = {ProductList}></Route>

            <Route path = "/schedulers" component = {ListSchedulerComponent}></Route>
            {/*<Route path = "/schedulers" component = {ListSchedulerComponent}></Route>*/}
            <Route path = "/add-scheduler/" component = {CreateSchedulerComponent}></Route> 
            <Route path = "/update-scheduler/:schedulerId" component = {UpdateSchedulerComponent}></Route>
            <Route path = "/view-scheduler/:schedulerId" component = {ViewSchedulerComponent}></Route> 

            
            <Route path = "/add-product/" component = {CreateProduct}></Route>
            <Route path = "/view-product/:productId" component = {ViewProductComponent}></Route>
            <Route path = "/update-product/:productId" component = {UpdateProductComponent}></Route>

            <Route path = "/admins" component = {ListAdmin}></Route>
            <Route path = "/view-admin/:id" component = {ViewAdmin}></Route>
            <Route path = "/edit-admin/:id" component = {UpdateAdmin}></Route>

            <Route path = "/customers"  component = {ListCustomerComponent}></Route>
            <Route path= "/view-customer/:customerId" component = {ViewCustomerComponent}></Route>
            <Route path= "/update-customer/:customerId" component = {UpdateCustomerComponent}></Route>

            <Route path = "/contracts"  component = {ListContractComponent}></Route>
            <Route path = "/add-contract/" component = {CreateContract}></Route> 
            <Route path= "/view-contract/:contractNumber" component = {ViewContractComponent}></Route>
            <Route path= "/update-contract/:contractNumber" component = {UpdateContractComponent}></Route>

            <Route path = "/lands"  component = {LandList}></Route>
            <Route path = "/add-land/" component = {CreateLand}></Route> 
            <Route path= "/view-land/:landId" component = {ViewLand}></Route>
            <Route path= "/update-land/:landId" component = {UpdateLand}></Route>

            <Route path = "/orders"  component = {ListOrder}></Route>
            <Route path = "/add-order/" component = {CreateOrder}></Route> 
            <Route path= "/view-order/:orderNumber" component = {ViewOrder}></Route>
            <Route path= "/update-order/:orderNumber" component = {UpdateOrder}></Route>


          </Switch>
        </div>
     
    </div>
  );
}
export default App;
