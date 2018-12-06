import {connect} from 'react-redux'
import ShadowMatic from "../components/shadowMatic/shadowMatic";
import {getDataTopic} from '../redux/action'

export default connect(
  state => ({dataTopic: state.dataTopic}),
  {getDataTopic}
)(ShadowMatic)
