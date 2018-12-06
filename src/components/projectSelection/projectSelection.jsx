import React ,{Component} from 'react';

import './index.css'
class ProjectSelection extends Component {

  render() {
    const {topicList} = this.props
    return (
      <div className="project">
        <ul className="projectList">
          {topicList.map((topic, index)=>
            <li key={index}>
            <img src={`${topic.itemPicUrl}`}/>
            <span className="title">{topic.titl}</span>
            <span className="subtitle">{topic.subtitle}</span>
            <span className="priceInfo">{topic.priceInfo}元起</span>
          </li>
          )}
          {/*<li>*/}
            {/*<img src="topic.itemPicUrl" />*/}
            {/*<span className="title">{{topic.title}}</span>*/}
            {/*<span className="subtitle">{{topic.subtitle}}</span>*/}
            {/*<span className="priceInfo">{{topic.priceInfo}}元起</span>*/}
          {/*</li>*/}

        </ul>
      </div>
    )
  }

}

export default ProjectSelection
