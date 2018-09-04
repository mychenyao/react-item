import React, { Component } from 'react';
// import {Link} from "react-router-dom"
import "./style.css"
import data from "../../static/json/data.json"
// import moment from 'moment'
class List extends Component {
    constructor (props) {
        super(props);
        this.state={
            goods: data.goods,
            selectItem: 0,
        }
        this.state.goods.forEach(v=>{
            v.foods.forEach(e=>{
                e.size = 0
            })
        })
    } 
    selectTab(i) {
        this.setState({selectItem: i})
        let title = document.getElementsByClassName('right_ref_title')[i].offsetTop
        console.log(document.getElementsByClassName('right_ref_title')[i])
        document.querySelector(".right_content").scrollTop = title-200
    }
    componentDidMount() {
        let heights=[0];
        let h = 0;
        let Height = document.getElementsByClassName('right_ref_title');
            for(let i = 0; i < Height.length; i ++){ 
                h += Height[i].clientHeight
                heights.push(h)
            }
        document.querySelector('.right_content').addEventListener('scroll',() => {
            let targetY = document.querySelector('.right_content').scrollTop+2
           for(let i = 0; i < heights.length; i ++){
               if(!!targetY&& targetY >= heights[i] && targetY< heights[i+1] ){
                     this.setState({selectItem: i})
                     return;
               }
           }
        })
    }
    subtract(i,index) {
        if(this.state.goods[i].foods[index].size<=0) return;
        let data = this.state.goods.map((v,ind)=> {
            if(ind === i) v.foods[index].size --;
            return v;
        })
       this.setState({goods:data})
       this.props.shopSum(this.state.goods[i].foods[index])
    }
    add(i,index) {
        let data = this.state.goods.map((v,ind)=> {
            if(ind === i) v.foods[index].size ++;
            return v;
        })
       this.setState({goods:data})
       this.props.shopSum(this.state.goods[i].foods[index])
    }
    render() {
        return (
            <div className='container'>
                <div className="left_content">
                    {
                        this.state.goods.map((v,i) => 
                            <div key={i} 
                                onClick={()=> this.selectTab(i)}
                                className={`left_item ${i === this.state.selectItem ? 'select_item':''}`} >
                                {v.name}
                            </div>
                        )
                    }
                </div>
                <div  className="right_content">
                    {
                        this.state.goods.map((v,i) => 
                            <div key={i}  className='right_ref_title'>
                                <div className={`right_item_title`}>
                                    {v.name}
                                </div>
                                {
                                    v.foods.map((e,index) => 
                                    <div className='prouct_container' key={index}>
                                         <div className='prouct_container_item'>
                                            <img src={e.image} alt=""/>
                                            <div className="prouct_right_container">
                                                <h3>{e.name}</h3>
                                                {!!e.description? <p className='sales'>{e.description}</p>:''}
                                                <p className='sales'>月售{e.sellCount}份 &nbsp;&nbsp;&nbsp;好评率{e.rating}%</p>
                                                <div className='operate_container'>
                                                    <div className='item_price_container'>
                                                        <span className='renminbi'>¥</span>
                                                        <span>{e.price}</span>
                                                        &nbsp; &nbsp;
                                                        { !!e.oldPrice?
                                                           <del className="del_price">
                                                                <span className='renminbi'>¥</span>
                                                                <span>{e.oldPrice}</span>
                                                            </del>: ''
                                                        }
                                                       
                                                    </div>
                                                    <div className='operate_btn_container'>
                                                        <b className='operate_btn subtract' onClick={ ()=> this.subtract(i,index)}></b>
                                                         {e.size}
                                                        <b className='operate_btn add' onClick={ ()=> this.add(i,index)}></b>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        );
    }
}
export default List;
