import React ,{Component} from 'react';
import Pubsub from 'pubsub-js'
import BScroll from 'better-scroll'
import './index.css'

class CartgoryRight extends Component {
  state = {
    index : 0
  }

  componentDidMount () {
    Pubsub.subscribe('msg', (msg,index)=>{
      this.setState({
        index : index
      })
    })


  }
  render() {
    const {index} = this.state
    const {categoryL1List} = this.props
    return (
      <div className="MainCategoryAllTodo">
        <div className="CategoryScrollTodo">
          {categoryL1List.map((data,dataItem)=>
            <div className="CategoryRightInfo" key={dataItem} style={dataItem ===index?{display:'block'}:{display:'none'}}>
              <div className="CategoryImg">
                <img src={`${data.bannerUrl}`}/>
              </div>
              <div className="CategoryText">
                <span className="recommend">{data.name}</span>
                <span className="classify">分类</span>
              </div>
              <div className="CategoryMain">
                <ul className="CategoryMainList">
                  {data.subCateList.map((item, itemIndex)=>
                    <li key={itemIndex} >
                      <img src={`${item.wapBannerUrl}`} />
                      <span className="CategoryTitle">{item.name}</span>
                    </li>
                  )}

                </ul>
              </div>
            </div>
          )}


        </div>
      </div>
    )
  }

}

export default CartgoryRight
