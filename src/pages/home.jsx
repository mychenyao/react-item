import React, { Component } from 'react';
import Footer from "./footer/footer"
import ReactSwiper from "reactjs-swiper"
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
       this.$http.get("https://app.dingdingkuaixiu.com/homedata").then(res =>{

       })
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
            <div className="App">
               <div>
                  <ReactSwiper 
                    swiperOptions={swiperOptions} 
                    showPagination 
                    items={this.state.slideShow}
                    className="swiper-example" >
                 </ReactSwiper>
               </div>
               <div className="menu_container">
                    {menuItems}
               </div>
             
            </div>
        );
    }
}

export default home;
