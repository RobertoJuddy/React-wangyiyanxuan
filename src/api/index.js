import ajax from './ajax'
// const BASE = '/api'
// const BASE = ''
export const reqGetHomeData = () => ajax('/homedata')

export const reqDataTopic = () => ajax('/datatopic')
//
export const reqGetDataNav = () => ajax('/datanav')
//
// export const reqSendCode = (phone) => ajax(BASE +'/sendcode' , {phone})
//
// export const reqLoginSms = ({phone, code}) => ajax(BASE+'/login_sms', {phone, code} ,'POST')
//
// export const reqLoginPwd = ({name, pwd ,captcha}) => ajax(BASE+'/login_pwd' ,{name, pwd, captcha}, 'POST')


