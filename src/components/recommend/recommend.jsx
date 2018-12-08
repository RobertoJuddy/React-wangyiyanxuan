import React ,{Component} from 'react';

import './index.css'
class Recommend extends Component {

  render() {
    const {recommend} = this.props
    return (

      <div>
          <div className="Recommend">
            <img className="RecommendImg" src={`${recommend.Item[0].picUrl}`} />
            <span className="RecommendText">{recommend.Item[0].typeName}</span>
          </div>
         <div className="nickInfo" >
            <span className="nickName">{recommend.Item[0].nickname}</span>
            <span className="nickPrice">{recommend.Item[0].priceInfo}元起</span>
            <span className="nickDescript">{recommend.Item[0].subTitl}</span>
          </div>
       </div>
    )
  }

}

export default Recommend
