import React ,{Component} from 'react';

import './index.css'
class DirectSupply extends Component {



  render() {

    const {tagList ,current} = this.props

    return (
      <div className="directSupply">
        <ul className="supplyList" >
          {tagList.map((item,index)=>
            <li className="one" key={index} style={index<=current*4+3 && index>(current-1)*4+3?{display:'block'}:{display:'none'}}>
              <img src={`${item.picUrl}`}  className="supplyImg" />
              <span className="tagName">{item.name}</span>
              <span className="tagPrice">{item.floorPrice}元起</span>
            </li>

          )}
          {/*<li className="one" >*/}
            {/*<img src="tag.picUrl"  className="supplyImg" />*/}
            {/*<span className="tagName">{{tag.name}}</span>*/}
            {/*<span className="tagPrice">{{tag.floorPrice}}元起</span>*/}
          {/*</li>*/}
        </ul>
       </div>
    )
  }

}

export default DirectSupply
