import React ,{Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'

class ShadowMaticScroll extends Component {
  componentDidMount () {
    new BScroll('.ShadowContainer' , {
      click : true,
      scrollX : true
    })
  }
  render() {
    const {tenfifteen} = this.props
    return (
      <div className="ShadowContainer">
        <div className="ShadowMaticContainer">
          {tenfifteen.map((item,index)=>
            <div className="ShadowMacicMain" key={index}>
              <div className="days">今日话题</div>
              <div className="life">{item.title}</div>
              <div className="tear">{item.desc}</div>
              <div className="ShadowImgAll">
                <div className="ShadowImg" >
                  <img  src="https://yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1"/>
                </div>
                <div className="ShadowImg" >
                  <img  src="https://yanxuan.nosdn.127.net/0e6cc440246db5f3ea2e908c16554ec1"/>
                </div>

                <span className="person">5</span>
                <span className="ShadowText">人参加话题</span>
              </div>
            </div>
          )}

      </div>
  </div>
    )
  }

}

export default ShadowMaticScroll
