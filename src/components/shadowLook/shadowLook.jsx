import React ,{Component} from 'react';
import './index.css'

class ShadowLook extends Component {

  render() {
    const {yxLook} = this.props
    return (
      <div className="ShadowLook">
        <div className="ShadowLookImg">
          <img src={`${yxLook.picUrl}`}/>
        </div>
        <div className="ShadowLookInfo">
          <img src={`${yxLook.avatar}`}/>
          <span className="ShadowLookText">{yxLook.content}</span>
        </div>

      </div>
    )
  }

}

export default ShadowLook
