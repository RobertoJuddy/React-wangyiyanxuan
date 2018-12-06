import React ,{Component} from 'react';

import './index.css'
class Serve extends Component {

  render() {
    const {policyDescList} = this.props
    return (
      <div className="serve">
        {policyDescList.map((item, index)=>
          <div className="serveItem" key={index}>
            <img src={`${item.icon}`} className="imgServe" />
            <span>{item.desc}</span>
          </div>
        )}
      </div>
    )
  }

}

export default Serve
