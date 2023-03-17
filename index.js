// ! get 请求
const btnGet = document.getElementById('btn-get')
btnGet.onclick = () => {
  // ? 创建对象
  let xmlHttp
  if (window.XMLHttpRequest) {
    xmlHttp = new XMLHttpRequest()
  } else {
    // 考虑兼容 IE5、6 浏览器
    xmlHttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  /**
   * todo 语法: XMLHttpRequest.open(method, URL, boolean, name, password)
   * method: HTTP 请求方式，有 get post head put delete
   * URL: HTTP 请求的 URL 地址
   * boolean: 可选参数，参数值为布尔值，true 表示异步请求，false 表示同步请求，默认为 true
   * name: 该参数为可选参数，用于输入用户名。如果服务器需要验证，则必须使用该参数。
   * password: 该参数为可选参数，用于输入密码。如果服务器需要验证，则必须使用该参数。
   */
  // ? 初始化，设置请求方法和 url
  xmlHttp.open('GET', 'http://127.0.0.1:8000/server?a=1&b=2&c=3')
  // ? 发送
  xmlHttp.send()
  // ? onreadystatechange 每次状态改变时触发的事件
  xmlHttp.onreadystatechange = () => {
    // 判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成，服务端返回了所有结果
    if (xmlHttp.readyState === 4) {
      // 设置获取数据的语句 xmlHttp.state === 2xx 说明服务器成功响应返回的结果
      // if (xmlHttp.status === 200) {
      if (xmlHttp.status >= 200 && xmlHttp.status < 300) {
        // todo 处理结果，响应 行、头、空行、体
        // * status 响应行中的状态码
        console.log(xmlHttp.status)
        // * statusText 状态字符串
        console.log(xmlHttp.statusText)
        // * getAllResponseHeaders() 获取所有的响应头
        console.log(xmlHttp.getAllResponseHeaders())
        // * response 响应体
        console.log(xmlHttp.response)
        let box = document.getElementById('box')
        box.innerHTML = xmlHttp.response
        // 返回结果以字符串的形式输出
        // document.write(xmlHttp.responseText)
        // 返回结果以 XML 形式输出
        // document.write(xmlHttp.responseXML)
      }
    }
  }
}

// ! post 请求
const btnPost = document.getElementById('btn-post')
btnPost.addEventListener('click', () => {
  let xhr
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest()
  } else {
    xhr = new ActiveXObject('Microsoft.XMLHTTP')
  }
  xhr.open('POST', 'http://127.0.0.1:8000/server')
  /**
 * todo 语法: XMLHttpRequest.send(data)
 * 其中 data 是个可选参数，如果是 get 请求的数据写在 URL 中，那这里可以使用 null 来代替
 * 如果是 post 请求，data 参数的格式与在 URL 中传递参数的格式类似
 * XMLHttpRequest.send('name=myName&value=myValue')
 * 防止乱码: 服务器端设置 request.setCharacterEncoding('utf-8')
 * post 请求需要额外设置请求头:
 * XMLHttpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
 * 请求发送后， send()会把 readyState 设置为 2，并触发 onreadystatechange 事件。
 * 当所有的 HTTP 响应头部已经接收，send() 或后台线程把 readyState 设置为 3 并触发 onreadystatechange 事件。
 * 当响应完成，send() 或后台线程把 readyState 设置为 4，并最后一次触发事件。
 * 只有在使用了 send() 方法后。XMLHttpRequest 对象的 readyState 属性值才会开始变化，onreadystatechange 监听到 readyState 变化后才会执行
 */
  // ? 设置请求头
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
  // todo 自定义设置请求头
  xhr.setRequestHeader('token', 'd3VsYXhp')
  let params = {
    a: 111,
    b: 222,
    c: 333
  }
  xhr.send(params)
  xhr.onreadystatechange = () => {
    // 判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成，服务端返回了所有结果
    if (xhr.readyState === 4) {
      // 设置获取数据的语句 xhr.state === 2xx 说明服务器成功响应返回的结果
      // if (xhr.status === 200) {
      if (xhr.status >= 200 && xhr.status < 300) {
        // todo 处理结果，响应 行、头、空行、体
        // * status 响应行中的状态码
        console.log(xhr.status)
        // * statusText 状态字符串
        console.log(xhr.statusText)
        // * getAllResponseHeaders() 获取所有的响应头
        console.log(xhr.getAllResponseHeaders())
        // * response 响应体
        console.log(xhr.response)
        let content = document.getElementById('content')
        content.innerHTML = xhr.response
        // 返回结果以字符串的形式输出
        // document.write(xhr.responseText)
        // 返回结果以 XML 形式输出
        // document.write(xhr.responseXML)
      }
    }
  }
})


