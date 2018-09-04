import React, { Component } from 'react';
// import {Link} from "react-router-dom"
import "./style.css"
import avata from  "../../static/images/avata.png"
import List from "../list/list"
import FooterAdd from "../footerAdd/footerAdd"
class order extends Component {
    constructor (props) {
        super(props);
        this.state={
            shopSum: 0,
            price:0,
            shopProct:[]
        }
    }
    selectTab(i){
    }
    componentDidMount(){
    }
    getShopSum(arr) {
        return arr.map(v=>v.size).reduce((result,item) => result+item)
    }
    getPriceSum(arr) {
       return arr.map(v=>v.price*v.size).reduce((result,item) => result+item)
    }
    shopCart(e) {
       let shopProct = this.state.shopProct
           shopProct.push(e)
       let filterArr = Array.from(new Set(shopProct))
       this.setState({shopProct: filterArr, shopSum: this.getShopSum(filterArr),price: this.getPriceSum(filterArr)})
    }
    render() {
        return (
            <div>
                <div className='banner_top'>
                    <div className='content'> 
                        <img className='img' src={avata} alt=""/>
                        <div className='rigth_content'>
                            <div className='right_title'>
                                <div className='product_name'>
                                	品牌
                                </div>
                                <h3>粥品香坊（大运村</h3>
                            </div>
                            <p>蜂鸟专送 / 38分钟送达</p>
                            <div className='bottom_text'>
                                <b className='icon_text'></b>
                                <span>在线支付满28减5，满50减</span>
                                <div className='product_sum'>
                                    5 个
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* 公告 */}
                    <div className='icon announcement_container'>
                        <span>粥品香坊其烹饪粥料的秘方源于中国千年古法，再融和现代制作工艺 ...</span>
                    </div>
                    {/* tabs */}
                    <div className='tabs_container'>
                        <div className='items select_tabs'>
                        商品
                        </div>
                        <div className='items'>
                            评价
                        </div>
                        <div className='items'>
                            商家
                        </div>
                    </div>
                </div>
                {/* list */}
                <List shopSum={(e) => this.shopCart(e)}/>    
                <FooterAdd price={this.state.price} shopSum={this.state.shopSum}/> 
            </div>
        );
    }
}
export default order;
