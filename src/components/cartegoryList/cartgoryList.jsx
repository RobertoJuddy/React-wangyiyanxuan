import React ,{Component} from 'react';
import Pubsub from 'pubsub-js'
import './index.css'
class CartegoryList extends Component {

  state = {
    isShow : 0
  }

  handleColor = (index) => {

    this.setState({
      isShow : index
    })
    Pubsub.publish('msg',index)
  }

  render() {
    const {categoryL1List} = this.props
    const {isShow} = this.state
    return (
      <div className="Category">
        <ul className="CategoryList">
          {categoryL1List.map((data,index)=>
            <li
              className={`${index===isShow?"active":''}`}
              onClick={()=>this.handleColor(index)}
              key={index}>{data.name}</li>
            )}

        </ul>
  </div>
    )
  }

}

export default CartegoryList
