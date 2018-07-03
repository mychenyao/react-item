import React, { Component } from 'react';
import {Link} from "react-router-dom"
class footer extends Component {
    constructor (props) {
        super(props);
        this.state={
           
        }
    }
    subMit(e){
    }
    componentDidMount(){
      
    }
    render() {
    
        return (
            <div className="footer">
               <div>
                <Link to={"/home"} className="iconfont icon-homepage icon"></Link>
               </div>
               <div>
                <Link to={"/order"} className="iconfont icon-group icon"></Link>
               </div>
               <div>
                <Link to={"/user"} className="iconfont icon-qrcode icon"></Link>
               </div>
            </div>
        );
    }
}

export default footer;
