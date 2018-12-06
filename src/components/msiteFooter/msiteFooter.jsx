import React ,{Component} from 'react';
import './index.css'

class MsiteFooter extends Component {

  render() {
    return (
      <div className="msiteFooter">
        <div className="MFooter">
          <button type="submit" className="download">下载APP</button>
          <button type="submit" className="computer">电脑版</button>
          <span className="company">网易公司版权所有 © 1997-</span>
          <span className="year">2018</span>
          <span className="licence">食品经营许可证：JY13301080111719</span>
        </div>
      </div>
    )
  }

}

export default MsiteFooter
