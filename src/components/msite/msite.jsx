import React, {Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'
import MsiteSwiper from '../swiper'
import Serve from "../serve";
import Split from '../split'
import DirectSupply from '../directSupply/directSupply'
import PublishSwiper from "../publishSwiper/publishSwiper";
import ProjectSelection from "../projectSelection/projectSelection";
import MainScroll from "../mainScroll/mainScroll";
import MsiteFooter from "../msiteFooter/msiteFooter";

class Msite extends Component {

  state = {
    current : 0
  }

  async componentDidMount () {
    await this.props.getHomedata()

    new BScroll ('.container',{
      click : true
    })

    new BScroll ('.wrapper',{
      scrollX : true,
      click : true
    })
  }

  handleActive = index =>{
    this.setState({
      current : index
    })
  }

  render() {
    const {
      cateList,
      focusList,
      policyDescList,
      tagList,
      newItemList,
      saleIndexVO,
      topicList,
    } = this.props.data


    if(typeof cateList === "undefined"){
      return null
    }

    const {current} = this.state

    return (
      <div className="wrap">
        <div className="header">
          <div className="headerTop">
            <h2>网易严选</h2>
            <input type="text" placeholder="搜索商品，共1111件好商品"/>
            <span className="iconItem"><i className="iconfont icon-search"></i></span>
          </div>
          <div className="wrapper" >
            <ul className="navList" >
              {cateList.map((item ,index)=>

                <li key={item.id} onClick={()=>this.handleActive(index)} className={`${index===current?"active":''}`}>
                    {item.name}
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="main">
            <MsiteSwiper focusList={focusList}/>
            <Serve policyDescList={policyDescList}/>
            <div className="split">
              <Split />
            </div>
            <DirectSupply tagList={tagList} current={current}/>
            <div className="firstPublish">
              <div className="new">新品首发</div>
              <button>查看全部</button>
            </div>
            <PublishSwiper newItemList={newItemList}/>
            <div className="m-site" >
              <img src={`${saleIndexVO.picUrl}`}/>
            </div>
            <Split />
            <ProjectSelection topicList={topicList}/>
            <MainScroll cateList={cateList} current={current}/>
            <MsiteFooter/>
          </div>
        </div>

      </div>

    )
  }

}

export default Msite
