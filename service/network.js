// export default function request(options){
//   return new Promise((resolve,reject)=>{
//     wx.request({
//       url: options.url,
//       data: {} || options.data,
//       header: {},
//       method: 'GET' || options.method,
//       dataType: 'json',
//       responseType: 'text',
//       success: function (res) {
//         resolve(res)
//       },
//       fail: function (res) {
//         reject(res)
//       }
//     })
//   })
  
// }
export default function request(options) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: options.url,
      data: {} || options.data,
      header: {},
      method: 'GET' || options.method,
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject
    })
  })

}