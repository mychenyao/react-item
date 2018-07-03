import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
class orderItem extends Component {
    constructor (props) {
        super(props);
        this.state={
            dataList:[],
            color:0
        }
    }
    componentDidMount() {
      this.$http.get("https://app.dingdingkuaixiu.com/order/getorders?token=F0764EB996F54872993AFB6C05941765&type=2").then(res=>{
         const data = res.data
         this.setState({dataList:data.result})
         let odiv = document.getElementsByClassName("container_item")
         document.addEventListener("scroll",()=>{
          for(let i =0;i<odiv.length;i++){
            let sTop = odiv[i].offsetTop-document.documentElement.scrollTop
            if( sTop - (window.innerHeight/2) < 0 && sTop-(window.innerHeight/2) > -odiv[i].offsetHeight){
                this.setState({color:i})
            }
          }
         })
      })
    }
    render() {
        const Index=['1','2','3','4','5'].map((v,i)=><span key={i} className={this.state.color===i?"red":''}> {v} </span>
      )
        return (
            <div className="container">
            {
                this.state.dataList.map( v =>
                    <div key={v.order.id} className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：{v.order.id}
                        </div>
                        <div className="centent">
                            {v.services[0].serviceFullName}
                        </div>
                    </div>
                )
            } 
            <div  className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：11111111
                        </div>
                        <div className="centent">
                        </div>
                    </div>
                    <div  className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：2222222
                        </div>
                        <div className="centent">
                           
                        </div>
                    </div>
                    <div  className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：333333
                        </div>
                        <div className="centent">
                        </div>
                    </div>
                    <div  className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：4444444
                        </div>
                        <div className="centent">
                        </div>
                    </div>
                    <div  className="container_item">
                        <div className="order_number">
                            {this.props.name}订单编号：555555
                        </div>
                        <div className="centent">
                           
                        </div>
                    </div>
                   
            </div>
        );
    }
}

export default orderItem;
