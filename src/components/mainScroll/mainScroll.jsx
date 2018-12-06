import React ,{Component} from 'react';

import './index.css'
class MainScroll extends Component {

  render() {
    const {cateList,current} = this.props
    return (
      <div>
        {cateList.map((cate,index)=>
          <div className="living" key={index} style={current==index?{display:'block'}:{display:'none'}}>
            <h3 className="livingText">{cate.name}好物</h3>
            <ul className="livingList">
              {cate.itemList.map(item=>
                <li key={item.id}>
                  <img src={`${item.primaryPicUrl}`} />
                  <span className="livingName">{item.name}</span>
                  <span className="simpleDesc">{item.simpleDesc}</span>
                  <span className="livingPrice">￥{item.retailPrice}</span>
                </li>
              )}
              {/*<li >*/}
                {/*<img src="item.primaryPicUrl" />*/}
                {/*<span className="livingName">{{item.name}}</span>*/}
                {/*<span className="simpleDesc">{{item.simpleDesc}}</span>*/}
                {/*<span className="livingPrice">￥{{item.retailPrice}}</span>*/}
              {/*</li>*/}
            </ul>
          </div>
        )}
        {/*<div className="living" >*/}
          {/*<h3 className="livingText">{{cate.name}}好物</h3>*/}
          {/*<ul className="livingList">*/}
            {/*<li >*/}
              {/*<img src="item.primaryPicUrl" />*/}
              {/*<span className="livingName">{{item.name}}</span>*/}
              {/*<span className="simpleDesc">{{item.simpleDesc}}</span>*/}
              {/*<span className="livingPrice">￥{{item.retailPrice}}</span>*/}
            {/*</li>*/}
           {/*</ul>*/}
        {/*</div>*/}
       </div>
    )
  }

}

export default MainScroll
