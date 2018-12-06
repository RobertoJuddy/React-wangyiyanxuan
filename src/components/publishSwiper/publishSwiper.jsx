import React ,{Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'

class PublishSwiper extends Component {

  componentDidMount () {
    new BScroll('.PublishContainer' ,{
      click : true,
      scrollX : true
    })
  }

  render() {
    const {newItemList} = this.props
    return (
      <div className="PublishContainer">
        <ul className="containerList">
          {newItemList.map((newItem, index)=>
            <li key={index}>
            <img src={`${newItem.primaryPicUrl}`} />
            <span className="name">新品</span>
            <span className="much">{newItem.name}</span>
            <span className="type">{newItem.simpleDesc}</span>
            <span className="price">{newItem.retailPrice}￥</span>
          </li>)
          }
          {/*<li >*/}
            {/*<img src="newItem.primaryPicUrl" />*/}
            {/*<span className="name">新品</span>*/}
            {/*<span className="much">{{newItem.name}}</span>*/}
            {/*<span className="type">{{newItem.simpleDesc}}</span>*/}
            {/*<span className="price">{{newItem.retailPrice}}￥</span>*/}
          {/*</li>*/}
        </ul>
       </div>
    )
  }

}

export default PublishSwiper
