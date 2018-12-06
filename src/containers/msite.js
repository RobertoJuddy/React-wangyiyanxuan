import {connect} from 'react-redux'
import Msite from '../components/msite/msite'
import {getHomedata} from "../redux/action";

export default connect(

  state =>({data : state.data}),
  {getHomedata}

)(Msite)
