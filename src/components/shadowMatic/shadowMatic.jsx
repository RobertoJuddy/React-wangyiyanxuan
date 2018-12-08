import React ,{Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'
import ShadowSwiper from "../shadowSwiper/shadowSwiper";
import ShadowScroll from "../shadowScroll/shadowScroll";
import Split from '../split'
import Recommend from '../recommend/recommend'
import ShadowMaticNews from "../shadowMaticNews/shadowMaticNews";
import ShadowLook from "../shadowLook/shadowLook";
import ShadowMaticScroll from "../shadowMaticScroll/shadowMaticScroll";
import MoreSplended from "../moreSplended/moreSplended";


class ShdowMatic extends Component {

  async componentDidMount () {
   await this.props.getDataTopic()

    new BScroll('.shadowMaticContainerI' ,{
      click : true
    })
  }

  render() {
    const {
      banner,
      column,
      recommend,
      yxLook,
      tenfifteen,
      yxWeek
    } = this.props.dataTopic
    if(typeof banner === "undefined"){
      return null
    }
    return (
      <div className="app">
        <header className="header">
          <i className="iconfont icon-shouye" ></i>
          <div  className="headerText"></div>
          <span ><i className="iconfont icon-search"></i></span>
          <span ><i className="iconfont icon-caigou"></i></span>
        </header>
        <div className="shadowMaticContainerI">
         <div className="main">
           <ShadowSwiper banner={banner}/>
           <ShadowScroll column={column}/>
           <div>
             <Split />
             <Recommend recommend={recommend}/>
             <ShadowMaticNews recommend={recommend}/>
           </div>
           <div>
             <Split />
             <ShadowLook yxLook={yxLook}/>
           </div>
           <div>
             <Split/>
             <ShadowMaticScroll tenfifteen={tenfifteen}/>
           </div>
           <div>
             <Split/>
             <MoreSplended yxWeek={yxWeek}/>
           </div>
         </div>
        </div>

      </div>
    )
  }

}

export default ShdowMatic





