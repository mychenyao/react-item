import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
import OrderItem from "./components/orderItem"
class order extends Component {
    constructor (props) {
        super(props);
        this.state={
            isActive:0
        }
    }
    selectTab(i){
        this.setState({isActive:i})
    }
    componentDidMount(){
     
    }
    render() {
        const tabsName=['进行中',"已完成","已取消"]
        return (
            <div>
              <div className="tabs">
              {
                  tabsName.map((v,i)=><div key={i} onClick={()=>this.selectTab(i)} className={`tabs_item ${this.state.isActive===i?'selector':''}`}>{v}</div>)
              }
              </div>
              <OrderItem  name={tabsName[this.state.isActive]}/>
            </div>
        );
    }
}

export default order;
