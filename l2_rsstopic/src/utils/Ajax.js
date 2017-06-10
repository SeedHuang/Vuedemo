function Init() {
  if (!this.scriptElement) {
    this.scriptElement = window.document.createElement('script');
    this.scriptElement.id = 'my-ajax';
    document.head.appendChild(this.scriptElement);
  }
}

let ajax = {
  get(url, parameter) {
    !ajax.scriptElement && Init.apply(ajax);
    url += '?';
    !parameter && (parameter = {});
    let cbName = 'cb_' + window.parseInt(window.Math.random() * 10000000 * Date.now(), 10);
    parameter.fn = cbName;
    parameter.t = Date.now();
    let parameters = [];
    for (let field in parameter) {
      parameters.push(field + '=' + parameter[field]);
    }
    url += parameters.join('&');
    var promise = new Promise(function(resolve, reject) {
      window[cbName] = function(result) {
        if (result.errno == 0) {
          resolve(result);
        } else {
          reject(result);
        }
      };
      ajax.scriptElement.src = url;
    });
    return promise;
  }
}

export default ajax;
