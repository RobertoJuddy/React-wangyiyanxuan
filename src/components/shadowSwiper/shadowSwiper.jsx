import React ,{Component} from 'react';
import Swiper from 'swiper'
import './index.css'
class ShadowSwiper extends Component {
  componentDidMount () {
    new Swiper ('.swiper-container', {
      loop: true,
      slidesPerView : 'auto',
      centeredSlides : true,
      autoplay : true
    })
  }
  render() {
    const {banner} = this.props
    return (
      <div className="swiper-container shadowSwiperContainer">
        <div className="swiper-wrapper shadowWrapper">
          {banner.map((ban,index)=>
              <div className="swiper-slide shadowSlide" key={index}>
                <img className="ShadowImg" src={`${ban.picUrl}`} />
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
