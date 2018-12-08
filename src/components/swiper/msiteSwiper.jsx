import React ,{Component} from 'react';
import PropTypes from 'prop-types'
import Swiper from 'swiper'
import './index.css'
class MsiteSwiper extends Component {

  // static propTypes = {
  //   focusList : PropTypes.Array.isRequired
  // }

  componentDidMount () {
    new Swiper('.swiper-container', {
      autoplay: true,//可选选项，自动滑动
      loop : true,
      effect : 'fade',
      pagination: {
        el: '.swiper-pagination',
      },
    })
  }

  render() {
    const {focusList} = this.props
    if(typeof focusList === "undefined"){
      return null
    }
    return (
      <div className="swiper-container">
        <div className="swiper-wrapper" >
          {focusList.map((item,index)=><div className="swiper-slide" key={index}><img src={`${item.picUrl}`}/></div>)}
        </div>
        <div className="swiper-pagination"></div>
      </div>

    )
  }

}

export default MsiteSwiper
