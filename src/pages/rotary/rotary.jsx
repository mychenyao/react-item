import React, { Component } from 'react';
import no1 from '../../static/images/矩形 10.png';
import no2 from '../../static/images/矩形 10@2x.png';
import no3 from '../../static/images/矩形 10@3x.png';
// import {Link} from "react-router-dom"
import './style.css';
// import axios from "axios"
// import { createStore } from 'redux'/
// import moment from 'moment'
// Component.prototype.$http=axios
class rotary extends Component {
    constructor(props){
        super(props)
        this.state={
        }
    }
    componentDidMount() {
   
    }
  render() {
    return (
        <div className="rotary">
          <img src={no1} alt=""/>
          <img src={no2} alt=""/>
          <img src={no3} alt=""/>
        </div>
    );
  }
}

export default rotary;
