import React ,{Component} from 'react';

import './index.css'
class MoreSplended extends Component {

  render() {
    const {yxWeek} = this.props
    return (
      <div>
        {yxWeek.map((item, index)=>
        <div className="MoreSplended" key={index} >
            <div className="MoreSplendedImg" key={index}>
              <img src={`${item.itemPicUrl}`} />
              <div className="MoreSplendedText">
                <span>{item.subTitle}</span>
              </div>
            </div>
        </div>
          )}
  </div>
    )
  }

}

export default MoreSplended
