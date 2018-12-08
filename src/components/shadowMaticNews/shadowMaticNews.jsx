import React ,{Component} from 'react';
import './index.css'

class ShadowMaticNews extends Component {

  render() {
    const {recommend} = this.props
    return (
      <div>
        {recommend.Item.map((item, index)=>
          <div className="shadowMaticNews" key={index} style={index>0?{display:'block'}:{display:'none'}}>
            <div className="left">
              <div className="leftInfo">
                <img src={`${item.avatar}`} />
                <div className="name">{item.nickname}</div>
              </div>
              <div className="worldCup">{item.title}</div>
              <div className="discounts">{item.subTitle}</div>
            </div>
            <div className="right">
              <img src={`${item.picUrl}`} />
              <span className="RecommendText">{item.typeName}</span>
            </div>
          </div>
        )}

  </div>
    )
  }

}

export default ShadowMaticNews
