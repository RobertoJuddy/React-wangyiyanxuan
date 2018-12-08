import {connect} from 'react-redux'
import CartGory from "../components/cartgory/cartgory";
import {getDataNav} from "../redux/action";

export default connect(

  state=>({dataNav : state.dataNav}),
  {getDataNav}
)(CartGory)
