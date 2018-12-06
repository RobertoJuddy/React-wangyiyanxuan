import {connect} from 'react-redux'
import CartShop from "../components/cartShop/cartShop";
import {getHomedata} from "../redux/action";

export default connect(

  state=>({data : state.data}),
  {getHomedata}
)(CartShop)
