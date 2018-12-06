import React, {Component} from 'react';

import ShadowSwiper from '../../components/shadowSwiper/shadowSwiper'
import './index.css'


class ShadowMatic extends Component {
  componentDidMount () {
    this.props.getDataTopic()
  }
  render() {

    const {banner} = this.props.dataTopic
    console.log(banner)
    if(typeof dataTopic ==="undefined" ) {
      return null
    }
    return (
        <div className="app">
          <div className="header">
            <i className="iconfont icon-shouye" ></i>
            <div  className="headerText"></div>
            <span ><i className="iconfont icon-search"></i></span>
            <span ><i className="iconfont icon-caigou"></i></span>
          </div>
          <div className="shadowMaticContainer">
            <div className="main">
              <ShadowSwiper banner={banner}/>
            </div>
          </div>
        </div>


    )
  }

}

export default ShadowMatic
