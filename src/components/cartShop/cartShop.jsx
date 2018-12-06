import React ,{Component} from 'react';

import CommonHeader from "../commonHeader/commonHeader";
import './index.css'

class CartShop extends Component {

 async componentDidMount(){
    await this.props.getHomedata()
  }

  render() {
   const {policyDescList} = this.props.data
    if(typeof policyDescList === 'undefined') {
      return null
    }
    return (
      <div>
        <CommonHeader/>
        <div className="CartContainer">
          <div className="serve">
            {policyDescList.map((police,index)=>
              <div className="serveItem" key={index}>
                <img src={`${police.icon}`} className="imgServe" />
                <span>{police.desc}</span>
              </div>
            )}
            {/*<div className="serveItem">*/}
            {/*<img src="police.icon" className="imgServe" />*/}
            {/*<span>{{police.desc}}</span>*/}
          </div>
          <div className="cartImg"></div>
          <div className="login" >登录</div>
       </div>
      </div>

    )
  }

}

export default CartShop
