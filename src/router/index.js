
import React, { Component } from 'react';
import {HashRouter, Route,Switch}from "react-router-dom"
import App from "../App"
import home from "../pages/home"
import order from "../pages/order/order"
import user from "../pages/user/user"
import Footer from "../pages/footer/footer"
export default class routers extends Component{
 render() {
     return (
         <HashRouter>
             <div>
             <Footer/>
                 <Switch>
                     <Route path="/" exact component={App}/>
                     <Route path="/home" component={home}/>
                     <Route path="/order" component={order}/>
                     <Route path="/user" component={user}/>
                 </Switch>
             </div>
         </HashRouter>
     )
}
}
