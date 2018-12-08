import React from 'react';
import ReactDOM from 'react-dom';
import {Switch ,Route, HashRouter} from 'react-router-dom'
import {Provider} from 'react-redux'
import Main from "./containers/main";
import Login from './components/login/login'
import './components/mock/mockServer'
import store from './redux/store'
import './assets/reset.css'


 ReactDOM.render((
   <Provider store={store}>
     <HashRouter>
       <Switch>
         <Route to='/'  component={Main} />
         {/*<Route to='/login' component={Login}*/}
       </Switch>
     </HashRouter>
   </Provider>

 ),
  document.getElementById('root'));



