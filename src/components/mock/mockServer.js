import Mock from 'mockjs'
import HomeData from './datahome.json'
import DataTopic from './datatopic.json'
import DataNav from './datanav.json'

Mock.mock('/homedata', {
  code: 0,
  data: HomeData
}),
  Mock.mock('/datatopic', {
    code : 0,
    data : DataTopic
  }),
  Mock.mock('/datanav', {
    code : 0,
    data : DataNav
  })
