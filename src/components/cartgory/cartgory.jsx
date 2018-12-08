import React ,{Component} from 'react';

import './index.css'
import CartegoryList from "../cartegoryList/cartgoryList";
import CartgoryRight from "../cartgoryRight/cartgortyRight";
import BScroll from "better-scroll";
class CartGory extends Component {

  async componentDidMount () {
   await this.props.getDataNav()

    new BScroll('.CategoryScrollMain' , {
      click : true,
      bounce : false
    })
  }

  render() {

    const {categoryL1List} = this.props.dataNav
    if(typeof categoryL1List === "undefined"){
      return null
    }
    return (
      <div className="CategoryAll">
        <div className="CategoryHeader">
          <i className="iconfont icon-search"></i>
          <input type="text" placeholder="搜索商品, 共9714款好物"/>
        </div>
        <div className="CategoryMainAll">
          <div className="CategoryLeft">
            <CartegoryList categoryL1List={categoryL1List}/>
          </div>
          <div className="CategoryScrollMain">
            <div className="CategoryRight">
              <CartgoryRight categoryL1List={categoryL1List} />
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default CartGory
