import React ,{Component} from 'react';
import BScroll from 'better-scroll'
import './index.css'
class ShadowScroll extends Component {
  componentDidMount () {
    new BScroll('.shadowScrollContainer', {
      scrollX :true,
      click : true
    })
  }
  render() {
    const {column} = this.props
    return (
      <div className="shadowScrollContainer">
        <ul className="shadowScrollList">
          {column.map((item,index)=>
            <li key={index}>
              <img src={`${item.picUrl}`} />
              <span className="shadowScrollText">{item.title}</span>
              <span className="shadowTopText">{item.articleCount}</span>
            </li>
          )}
        </ul>
      </div>
    )
  }

}

export default ShadowScroll
