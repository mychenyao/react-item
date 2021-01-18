import App from "../App";
import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom"
import {routerList} from "./routerList";
export default class routers extends Component{
 render() {
     return (
        <BrowserRouter>
             <App>
             {/* <Footer/> */}
                 <Switch>
                     <Redirect from={'/'}  to='/home' exact />
                     {
                         routerList.map(v => <Route {...v} key={v.path} />)
                     }
                 </Switch>
             </App>
        </BrowserRouter>
     )
}
}
