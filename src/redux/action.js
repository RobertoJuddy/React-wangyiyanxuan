
import {reqGetHomeData} from '../api'
import {GETHOMEDATA_SUCCESS}  from './action-types'

export const gethomedata_success = info =>({type :GETHOMEDATA_SUCCESS ,data: info})

export const getHomedata = data => {

  return async dispatch => {

   const result = await reqGetHomeData(data)

    if(result.code ===0 ){
      dispatch(gethomedata_success(result.data))
    }
  }
}
