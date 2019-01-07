import JSONP from "jsonp";
export default class Axios {
  // 此处可以做一些处理，事件的拦截而不是直接调这个jsonp方法
  static jsonp(options) {
    return new Promise((resolve, reject) => {
      // resolve成功  reject 失败
      JSONP(
        options.url,
        {
          param: "callback" // 通过callback接收
        },
        function(err, response) {
          // todo
          // debugger;
          if (response.status == "success") {
            resolve(response);
          } else {
            reject(response.message);
          }
        }
      );
    });
  }
}
