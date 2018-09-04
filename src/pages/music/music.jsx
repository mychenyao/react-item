import React, { Component } from 'react';
import es from '../../static/images/es.jpeg';
// import {Link} from "react-router-dom"
import './style.css';
// import axios from "axios"
// import { createStore } from 'redux'/
import moment from 'moment'
// Component.prototype.$http=axios
class Music extends Component {
    constructor(props) {
        super(props)
        this.state={
            isStop: false,
            targeDate: 3*60,
            countdown: "00:00"
        }
        var maxtime = 4 * 60; //一个小时，按秒计算，自己调整!   
        let minutes = null;
        let seconds = null;
        let msg = null;
        let currentDate = 0
        let currentYou = 0
        let _this = this
                  function CountDown() {
                        if (maxtime >= 0) {
                            minutes = Math.floor(maxtime / 60);
                            seconds = Math.floor(maxtime % 60);
                            --maxtime;
                        } 
                        _this.setState({countdown:`${minutes<10?'0'+minutes:minutes}:${seconds<10?'0'+seconds:seconds}`})
                  }      
                  setInterval(CountDown,1000)  
    }
    stop() {
        let audio = this.refs.audio
            if(!this.state.isStop){
                audio.play(); //开始播放
            } else {
                audio.pause()
            }
        this.setState({isStop: !this.state.isStop})
    }
    componentDidMount(){
            this.refs.stepBorder.style.animation=`Width ${this.state.targeDate}s linear`;
    }
  render() {
    return (
      <div className="music">
        <img src={es} alt="" className="background_img"/>
        <div className='container'>
            <div className="turnplate"></div>
            <div className='operation_container'>
                <div className='step_container'>
                    <span className='step_time'>00:00</span>
                    <div className='step'>
                        <div className='step_border' ref='stepBorder'></div>
                    </div>
                    <span className='step_time'>{this.state.countdown}</span>
                </div>
                <div className='controller'>
                    <i className='iconfont icon_controller'>&#xe66c;</i>
                    <i className='iconfont icon_controller fon1'>&#xe6e1;</i>
                    <i className= {`iconfont icon_controller font1_2 ${this.state.isStop ? 'icon-plus-pause' : 'icon-bofang'} `} onClick={()=>this.stop()}></i>
                    <i className='iconfont icon_controller fon1'>&#xe718;</i>
                    <i className='iconfont icon_controller'>&#xe601;</i>
                </div>
                <audio  className='display' ref='audio'>
                    <source  src="http://m10.music.126.net/20180828165043/2d357a569b3e93e428fe9064c25cd202/ymusic/a3c6/87ff/4bdb/58a9fc1e0ed73e96c6324439c8ac0783.mp3" type="audio/ogg" />
                </audio>
            </div>
        </div>
      </div>
    );
  }
}
export default Music;
