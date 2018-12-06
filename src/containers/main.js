import {connect} from 'react-redux'
import Main from '../components/main'
import {getHomedata} from "../redux/action";

export default connect(
  state => ({data: state.data}),
  {getHomedata}
)(Main)
