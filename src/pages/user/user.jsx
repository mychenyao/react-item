import React, { Component } from 'react';
// import {Link} from "react-router-dom"
import "./style.css"
class user extends Component {
    constructor (props) {
        super(props);
        this.state={
        }
    }
    subMit(e){

    }
    componentDidMount(){
        let canvas=document.getElementById("canvas");
        let ctx=canvas.getContext("2d");  
            ctx.translate(75,75); 
            ctx.beginPath();
        for(let i=0;i<6;i++){
            ctx.save();
            ctx.fillStyle = 'rgb('+(10*i)+','+(400-51*i)+',355)';
            for (var j=0;j<i*6;j++){ // draw individual dots ctx.rotate(Math.PI*2/(i*6)); ctx.beginPath(); ctx.arc(0,i*12.5,5,0,Math.PI*2,true); ctx.fill(); }
            ctx.rotate(Math.PI*2/(i*6));
            ctx.beginPath();
            ctx.arc(0,i*12.5,5,0,Math.PI*2,true);
            ctx.fill();
        }
    }
    }
    render() {
        return (
            <div className="box">
              <canvas id="canvas" width="300" height="150"></canvas>
            </div>
        );
    }
}

export default user;
