import {connect} from 'react-redux'
import Main from '../components/main/main'
import {getHomedata} from "../redux/action";

export default connect(
  state => ({data: state.data}),
  {getHomedata}
)(Main)
