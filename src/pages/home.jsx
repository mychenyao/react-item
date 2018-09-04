import React, { Component } from 'react';
// import Footer from "./footer/footer"
import ReactSwiper from "reactjs-swiper"
import * as userInfoActionsFromOtherFile from '../reduc/actions'
import { connect } from 'react-redux'
import { bindAcionCreators } from 'redux' 
import './style.css'
class home extends Component {
    constructor (props) {
        super(props);
        this.state={
            slideShow:[]
        }
    }
    subMit(e){
    }
    componentDidMount(){
    }
    render() {
       const swiperOptions = {
        preloadImages: true,
        autoplay: 4000,
        autoplayDisableOnInteraction: false
       },
       menuItems=[];
       for(let i=0;i<5;i++){
        menuItems.push(<div key={i} className="menu_item"> </div>)
       }
        return (
            <div className="App scroll-content">
               {/* <div>
                  <ReactSwiper 
                    swiperOptions={swiperOptions} 
                    showPagination 
                    items={this.state.slideShow}
                    className="swiper-example" >
                 </ReactSwiper>
               </div>
               <div className="menu_container">
                    {menuItems}
               </div> */}
              <div className="item">
              </div>
              <div className="item">

</div>
<div className="item">

</div>
<div className="item">

</div>
<div className="item">

</div>
<div className="item">

</div>
          </div>      
        );
    }
}

export default home;
