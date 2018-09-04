import React, { Component } from 'react';
// import {Link} from "react-router-dom"
import "./style.css"
import data from "../../static/json/data.json"
import shopCart from "../../static/images/shop_cart.png"
// import moment from 'moment'
class footerAdd extends Component {
    constructor (props) {
        super(props);
        this.state={
            goods: data.goods,
            selectItem: 0,
            isAnimation: false,
        }
    } 
    componentDidUpdate(prevProps) {
        if(prevProps.shopSum!==this.props.shopSum)this.setState({isAnimation:true},()=> setTimeout(()=>{this.setState({isAnimation:false})},500) )
      }
    render() {
        return (
            <div className='container_footer'>
               <div className='conteiner_footer_left'>
                    <div className='shop_cart'>
                        <img src={shopCart} alt=""/>
                        <div className={`shop_cart_sum_container ${this.state.isAnimation?'shop_cart_animation':''}`}>{this.props.shopSum}</div>
                    </div>
                    <div className="prouct_text">
                        ¥ {this.props.price} &nbsp;&nbsp;
                        <span>另需配送费￥4元</span>
                    </div>
               </div>
               <div className="container_footer_btn">
                   去结算
               </div>
            </div>
        );
    }
}
export default footerAdd;
