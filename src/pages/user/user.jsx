import React, { Component } from 'react';
import {Link} from "react-router-dom"
import "./style.css"
class user extends Component {
    constructor (props) {
        super(props);
        this.state={
           labelList:["手机分类","家电分类","维修分类","电脑分类","清洗分类","空调分类","汽车分类",],
           itemList:[
               {
                   b:'手机分类',
                   childer:[
                       "3g2",
                       "3h2", "3w2",
                       "3t2", "3e2",
                       "3hj2",
                       "3gh2",
                       "32tr", "3jjh2",
                       "32tr",
                       "32wer",
                   ]
               },
               {
                b:'电脑分类',
                childer:[
                    "3g2",
                    "3h2", "3w2",
                    "3t2", "3e2",
                    "3hj2",
                    "3gh2",
                    "32tr", "3jjh2",
                    "32tr",
                    "32wer",
                ]
            },
            {
                b:'家电分类',
                childer:[
                    "3g2",
                    "3h2", "3w2",
                    "3t2", "3e2",
                    "3hj2",
                    "3gh2",
                    "32tr", "3jjh2",
                    "32tr",
                    "32wer",
                ]
            },
            {
                b:'汽车分类',
                childer:[
                    "3g2",
                    "3h2", "3w2",
                    "3t2", "3e2",
                    "3hj2",
                    "3gh2",
                    "32tr", "3jjh2",
                    "32tr",
                    "32wer",
                ]
            },
            {
                b:'空调分类',
                childer:[
                    "3g2",
                    "3h2", "3w2",
                    "3t2", "3e2",
                    "3hj2",
                    "3gh2",
                    "32tr", "3jjh2",
                    "32tr",
                    "32wer",
                ]
            },
            {
                b:'维修分类',
                childer:[
                    "3g2",
                    "3h2", "3w2",
                    "3t2", "3e2",
                    "3hj2",
                    "3gh2",
                    "32tr", "3jjh2",
                    "32tr",
                    "32wer",
                ]
            },
           ]
        }
    }
    subMit(e){

    }
    componentDidMount(){
        
      const scrollHeight = document.documentElement.scrollHeight;
      const w = window.innerHeight;
      const letDiv = document.getElementsByClassName("left_items")
      let oDiv = document.getElementsByClassName("right_items");
      let box = document.getElementsByClassName("right")[0]
      box.addEventListener("scroll",()=>{
        const scrollTop = box.scrollTop;
        for(let k = 0;k<letDiv.length;k++){
            letDiv[k].style.color="black"
       }
        for(let i=0;i<oDiv.length;i++){
                let heig = oDiv[i].offsetHeight
                let scrol = oDiv[i].offsetTop
                if((scrol-scrollTop>10)&&(scrol-scrollTop<w/2)){
                    letDiv[i].style.color="pink"
                }    
        }
      })
    }
    render() {
    
        return (
            <div className="box">
               <div className="left">
                {this.state.labelList.map((v,i)=><div key={i} className="left_items">{v}</div>)}
               </div>
               <div className="right">
                {
                    this.state.itemList.map((v,i)=>
                    <div className="right_items" key={i}>
                    <h5>{v.b}</h5>
                        {
                            v.childer.map((e,y)=>
                          <p className="childer_items" key={y}>{e}</p> 
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

export default user;
