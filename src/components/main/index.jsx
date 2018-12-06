import React, {Component} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Msite from '../../containers/msite'
import Personal from '../personal'
import Cartgory from '../cartgory'
import ShadowMatic from '../shadowMatic'
import CartShop from '../cartShop'
import Footer from '../footer'
import PropTypes from "prop-types";

class Main extends Component {
  // static propTypes = {
  //   getHomedata : PropTypes.func.isRequired,
  //   data : PropTypes.Object.isRequired
  // }

 async componentDidMount () {
   await this.props.getHomedata()
  }
  render() {
    const {pathname} = this.props.location;
    if (pathname === '/') {
      return <Redirect to='/msite/0' />
    }
    return (
      <div>
        <Switch>
          <Route path='/msite' component={Msite}/>
          <Route path='/personal' component={Personal}/>
          <Route path='/cartgory' component={Cartgory}/>
          <Route path='/shadowmatic' component={ShadowMatic}/>
          <Route path='/cartshop' component={CartShop}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}
export default Main;
