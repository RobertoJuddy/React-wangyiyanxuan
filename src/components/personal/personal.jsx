import React ,{Component} from 'react';

import './index.css'
class Personal extends Component {

  state = {
    info : [
      {name : '我的订单', icon: 'icon-jian'},
      {name : '周六一起拼', icon: 'icon-rili'},
      {name : '售后服务', icon: 'icon-shouhoufuwu'},
      {name : '邀请返利', icon: 'icon-yaoqing'},
      {name : '优惠券', icon: 'icon-youhuiquan'},
      {name : '我的红包', icon: 'icon-wodehongbao'},
      {name : '优先购', icon: 'icon-gouwu'},
      {name : '礼品卡', icon: 'icon-qiapian'},
      {name : '积分中心', icon: 'icon-jifen'},
      {name : '会员俱乐部', icon: 'icon-huiyuan-'},
      {name : '地址管理', icon: 'icon-dizhi'},
      {name : '账号安全', icon: 'icon-anquan'},
      {name : '帮助与客服', icon: 'icon-kefu'},
      {name : '意见反馈', icon: 'icon-yijian'},
    ],
  }

  render() {
    const {info} = this.state
    return (
      <div className="Personal" >
        <div className="PersonalHeader">
          <div className="PersonalHeaderLeft">
            <img src="//yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png"/>
            <div className="userInfo">
              <span className="phone">12</span>
              <span className="phone" style={{display:"none"}}>22</span>

              <span className="normal">普通会员</span>
            </div>
          </div>
          <div className="PersonalHeaderRight">
            <i className="iconfont icon-erweima"></i>
            <div className="VIP">
              <i className="iconfont icon-lightningbshandian"></i>
              <div className="SuperVIP">
                <span className="SuperVIPText">超级会员</span>
                <div className="Immediately">
                  <span className="ImmediatelyText">立即调用</span>
                  <i className="iconfont icon-right-circle"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="BScrollPersonal">
          <div className="PersonalContent" >
            <ul className="PersonalList">
              {info.map((item,index)=>
                <li key={index}>
                  <div className="iconfontMain">
                    <i className={`iconfont ${item.icon}`}></i>
                  </div>
                  <span className="PersonalText">{item.name}</span>
                </li>
              )}
              {/*<li >*/}
                {/*<div className="iconfontMain">*/}
                  {/*<i className="iconfont" ></i>*/}
                {/*</div>*/}
                {/*<span className="PersonalText">xxx</span>*/}
              {/*</li>*/}
              <div className="PersonalMainPhone" >
                <span className="PhoneLogin" >登出</span>
              </div>
            </ul>

          </div>
        </div>

      </div>
    )
  }

}

export default Personal
