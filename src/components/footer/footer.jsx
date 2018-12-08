import React ,{Component} from 'react';
import './index.css'
import {NavLink} from 'react-router-dom'
import Pubsub from 'pubsub-js'
class Footer extends Component {
  componentDidMount () {
    Pubsub.subscribe('msg',(msg, index)=>{
      this.setState({
        id : index
      })

    })
  }
  state = {
    id : 0
  }




  render() {
   let {id} = this.state
   let footList = [
      {name: '首页', icon: 'icon-shouye', to:`/msite/${id}`} ,
      {name: '分类', icon: 'icon-jian', to : '/cartgory'},
      {name: '识物', icon: 'icon-baoguofahuo' ,to : '/shadowmatic'},
      {name: '购物车', icon: 'icon-caigou',to : '/cartshop'},
      {name: '个人', icon: 'icon-yonghu',to : '/personal'}
    ];
   console.log(footList[0].to)
    return (
      <div className="footer">

        {footList.map((item, index)=><NavLink to={item.to} key={index}>
          <span className={`iconfont ${item.icon}`}/>
          <span className="footerText">{item.name}</span>
        </NavLink>)}

      </div>
    )
  }

}

export default Footer
