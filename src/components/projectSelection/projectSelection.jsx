import React ,{Component} from 'react';
import  BScroll from 'better-scroll'
import './index.css'
class ProjectSelection extends Component {

  componentDidMount () {
    new BScroll('.project',{
      click : true,
      scrollX : true
    })
  }
  render() {
    const {topicList} = this.props
    return (
      <div className="project">
        <ul className="projectList">
          {topicList.map((topic, index)=>
            <li key={index}>
            <img className="msiteImg" src={`${topic.itemPicUrl}`}/>
            <span className="title">{topic.titl}</span>
            <span className="subtitle">{topic.subtitle}</span>
            <span className="priceInfo">{topic.priceInfo}元起</span>
          </li>
          )}


        </ul>
      </div>
    )
  }

}

export default ProjectSelection
