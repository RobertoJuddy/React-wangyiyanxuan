import React ,{Component} from 'react';

import './index.css'
class ShadowSwiper extends Component {
  render() {
    const {banner} = this.props
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {banner.map((ban,index)=>
              <div className="swiper-slide" key={index}>
                <img src={$`{ban.picUrl}`} />
                <div className="content">
                  <span className="title">{ban.subTitle}</span>
                  <span className="subTitle">{ban.title}</span>
                  <span className="desc">{ban.desc}</span>
                </div>
              </div>
          )}

        </div>
      </div>
    )
  }

}

export default ShadowSwiper
