import React ,{Component} from 'react';
import './index.css'
import {NavLink} from 'react-router-dom'

class Footer extends Component {
  state = {
    isShow : 0,
    footList: [
      {name: '首页', icon: 'icon-shouye', to:'/msite/0' },
      {name: '分类', icon: 'icon-jian', to : '/cartgory/1'},
      {name: '识物', icon: 'icon-baoguofahuo' ,to : '/shadowmatic/2'},
      {name: '购物车', icon: 'icon-caigou',to : '/cartshop/3'},
      {name: '个人', icon: 'icon-yonghu',to : '/personal/4'}
    ],

  }



  render() {
    const { footList} = this.state
    return (
      <div className="footer">

          {footList.map((item, index)=><NavLink to={`${item.to}`} key={index}>
            <span className={`iconfont ${item.icon}`}></span>
            <span className="footerText">{item.name}</span>
          </NavLink>)}

      </div>
    )
  }

}

export default Footer
