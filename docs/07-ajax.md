# 第7章 和服务端通信

Vue 不像 jQuery 内置了 ajax 请求函数，在 Vue 中没有提供这样的功能。所以当我们需要在 Vue 中和服务端进行通信的时候可选择的方式会更灵活一些。

> 注意：Vue 不提供的原因是为了让 Vue 本身更专注于视图部分，保持其渐进灵活的特性。

所以 Vue 给了我们更多的选择空间，例如我们可以使用下面的可选方案：

- 原生的 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
- 原生的 [Fetch](https://developer.mozilla.org/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- 也可以结合使用 jQuery 自带的 [Ajax](http://api.jquery.com/category/ajax/) 请求函数
- 早期大家开发 Vue 应用喜欢使用一个第三方插件：[Vue Resource](https://github.com/pagekit/vue-resource)
- 目前主流的方案是使用社区中知名的第三方库 [axios](https://github.com/axios/axios)
- ...

## axios

axios 是一个基于 Promise 的第三方 HTTP 客户端请求库，可以用于浏览器或者 Node.js。
axios 本身和 Vue 没有一毛钱关系，只是简单纯粹的封装了 HTTP 请求功能。可以运行在任何支持 JavaScript 环境的平台。
所以和 Vue 结合使用也是没有任何问题的。

- [axios Github](https://github.com/axios/axios)

### 特色

- 在浏览器端使用的是 [XMLHttpRequest](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest)
- 在 Node 中使用的是 [http](http://nodejs.org/api/http.html)
- 支持 Promise
- 支持请求拦截和响应拦截
- 支持转换请求和响应数据
- 支持取消请求
- 自动转换 JSON 数据
- 客户端支持防止 XSRF

### 浏览器支持

### 安装

使用 npm:

```shell
$ npm install axios
```

使用 bower（一个类似于 npm 的包管理工具，几乎已经淘汰）:

```
$ bower install axios
```

使用 cdn:

```html
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

### 示例

执行一个 `GET` 请求

```javascript
// Make a request for a user with a given ID
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

// Optionally the request above could also be done as
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

执行一个 POST 请求

```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

执行多个并发请求

```javascript
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

axios.all([getUserAccount(), getUserPermissions()])
  .then(axios.spread(function (acct, perms) {
    // Both requests are now complete
  }));
```

### axios API

我们可以像使用 `$.ajax()` 一样来使用 `axios`.

`axios(config)`

```javascript
// Send a POST request
axios({
  method: 'post',
  url: '/user/12345',
  data: {
    firstName: 'Fred',
    lastName: 'Flintstone'
  }
});
```

```javascript
// GET request for remote image
axios({
  method:'get',
  url:'http://bit.ly/2mTM3nY',
  responseType:'stream'
})
  .then(function(response) {
  response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
});
```

`axios(url[, config])`

```javascript
// Send a GET request (default method)
axios('/user/12345');
```

#### 请求方法别名

为了方便，axios 为所有的请求方法都提供了别名支持。

- axios.request(config)
- axios.get(url[, config])
- axios.delete(url[, config])
- axios.head(url[, config])
- axios.options(url[, config])
- axios.post(url[, data[, config]])
- axios.put(url[, data[, config]])
- axios.patch(url[, data[, config]])

> 注意：当使用了这些别名方法时，`url`, `method` 和 `data` 属性不需要声明在配置对象中。

#### 并发请求

axios 提供了辅助函数用来处理并发请求。

- axios.all(iterable)
- axios.spread(callback)

#### 创建一个 axios 实例

#### 实例方法

### 请求配置对象

### 响应体结构

### 默认配置

#### 全局配置

#### 局部配置

#### 配置优先顺序

### 拦截器

### 处理错误

### 取消请求

### 使用 `application/x-www-form-urlencoded`

By default, axios serializes JavaScript objects to JSON. To send data in the application/x-www-form-urlencoded format instead, you can use one of the following options.

#### 浏览器端

#### Node.js

### Promises

axios 依赖原生的 EcmaScript 6 Promise 支持。
如果你的运行环境不支持 EcmaScript 6 Promise，你可以使用 [ployfill](https://github.com/stefanpenner/es6-promise).

