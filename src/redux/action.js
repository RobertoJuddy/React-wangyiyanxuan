
import {
  reqGetHomeData,
  reqDataTopic
} from '../api'
import {
  GETHOMEDATA_SUCCESS,
  GETDATATOPIC_SUCCESS
}  from './action-types'


//同步action
export const gethomedata_success = info =>({type :GETHOMEDATA_SUCCESS ,data: info})

export const getdatatopic_success = info =>({type : GETDATATOPIC_SUCCESS, data : info})



//异步action
export const getHomedata = data => {

  return async dispatch => {

   const result = await reqGetHomeData(data)

    if(result.code ===0 ){
      dispatch(gethomedata_success(result.data))
    }
  }
}


export const getDataTopic = data =>{
  return async dispatch => {
    const result = await reqDataTopic(data)
    if(result.code === 0 ){
      dispatch(getdatatopic_success(result.data))
    }

  }
}
