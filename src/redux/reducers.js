import {combineReducers} from 'redux'
import {
  GETHOMEDATA_SUCCESS,
  GETDATATOPIC_SUCCESS
} from './action-types'

const registerState = {
  homeData : {},
}

function data(PreState = registerState, action){
  switch (action.type) {
    case GETHOMEDATA_SUCCESS:
      return action.data
    default :
      return PreState
  }

}

const initDataTopic = {
  dataTopic : {}
}

function dataTopic(PreState=initDataTopic ,action) {
  switch (action.type) {
    case GETDATATOPIC_SUCCESS :
      return action.data
    default :
      return PreState
  }
}


export default combineReducers ({
    data,
    dataTopic
}

)
