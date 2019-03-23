# VueCLI+Vue+VueRouter 案例

## 开始

```bash
# 安装 Vue CLI 脚手架
# 如果已经安装过则不需要
npm i -g vue-cli

# 使用脚手架工具初始化你的项目
vue init webpack 项目名称

# 进入你初始化好的项目
cd 项目路径

# 启动开发模式
# 或者 npm start
npm run dev
```

## 目录结构

## 组件化构建模型图

## .vue 单文件组件

## ECMAScript 6 Module

## 导入模板

将以下 HTML 放到 `src/App.vue` 根组件的模板：

```html
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">CRUD</a>
    </div>
  </div>
</nav>
<div class="container-fluid">
  <div class="row">
    <div class="col-sm-3 col-md-2 sidebar">
      <ul class="nav nav-sidebar">
        <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Reports</a></li>
        <li><a href="#">Analytics</a></li>
        <li><a href="#">Export</a></li>
      </ul>
    </div>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
      <h2 class="sub-header">Hero List</h2>
      <a class="btn btn-success" href="add.html">Add</a>
      <div class="table-responsive">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>#</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>Header</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1,001</td>
              <td>Lorem</td>
              <td>ipsum</td>
              <td>dolor</td>
              <td>sit</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,002</td>
              <td>amet</td>
              <td>consectetur</td>
              <td>adipiscing</td>
              <td>elit</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>Integer</td>
              <td>nec</td>
              <td>odio</td>
              <td>Praesent</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,003</td>
              <td>libero</td>
              <td>Sed</td>
              <td>cursus</td>
              <td>ante</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,004</td>
              <td>dapibus</td>
              <td>diam</td>
              <td>Sed</td>
              <td>nisi</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,005</td>
              <td>Nulla</td>
              <td>quis</td>
              <td>sem</td>
              <td>at</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,006</td>
              <td>nibh</td>
              <td>elementum</td>
              <td>imperdiet</td>
              <td>Duis</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,007</td>
              <td>sagittis</td>
              <td>ipsum</td>
              <td>Praesent</td>
              <td>mauris</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,008</td>
              <td>Fusce</td>
              <td>nec</td>
              <td>tellus</td>
              <td>sed</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,009</td>
              <td>augue</td>
              <td>semper</td>
              <td>porta</td>
              <td>Mauris</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,010</td>
              <td>massa</td>
              <td>Vestibulum</td>
              <td>lacinia</td>
              <td>arcu</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,011</td>
              <td>eget</td>
              <td>nulla</td>
              <td>Class</td>
              <td>aptent</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,012</td>
              <td>taciti</td>
              <td>sociosqu</td>
              <td>ad</td>
              <td>litora</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,013</td>
              <td>torquent</td>
              <td>per</td>
              <td>conubia</td>
              <td>nostra</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,014</td>
              <td>per</td>
              <td>inceptos</td>
              <td>himenaeos</td>
              <td>Curabitur</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
            <tr>
              <td>1,015</td>
              <td>sodales</td>
              <td>ligula</td>
              <td>in</td>
              <td>libero</td>
              <td>
                <a href="edit.html">edit</a>
                &nbsp;&nbsp;
                <a href="javascript:window.confirm('Are you sure?')">delete</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
```

## 导入第三方 bootstrap 样式

安装：

```bash
npm i bootstrap@3.3.7
```

在 `src/main.js` 中加载：

```js
// ...
import 'bootstrap/dist/css/bootstrap.css';

// ...
```

## 导入自己的 index.css 样式文件

首先在 `src/assets` 目录中创建 `src/assets/css/index.css` 文件，并写入以下内容：

```css
/*
 * Base structure
 */


/* Move down content because we have a fixed navbar that is 50px tall */

body {
  padding-top: 50px;
}



/*
 * Global add-ons
 */

.sub-header {
  padding-bottom: 10px;
  border-bottom: 1px solid #eee;
}


/*
 * Top navigation
 * Hide default border to remove 1px line.
 */

.navbar-fixed-top {
  border: 0;
}


/*
 * Sidebar
 */


/* Hide for mobile, show later */

.sidebar {
  display: none;
}

@media (min-width: 768px) {
  .sidebar {
    position: fixed;
    top: 51px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    display: block;
    padding: 20px;
    overflow-x: hidden;
    overflow-y: auto;
    /* Scrollable contents if viewport is shorter than content. */
    background-color: #f5f5f5;
    border-right: 1px solid #eee;
  }
}


/* Sidebar navigation */

.nav-sidebar {
  margin-right: -21px;
  /* 20px padding + 1px border */
  margin-bottom: 20px;
  margin-left: -20px;
}

.nav-sidebar>li>a {
  padding-right: 20px;
  padding-left: 20px;
}

.nav-sidebar>.active>a,
.nav-sidebar>.active>a:hover,
.nav-sidebar>.active>a:focus {
  color: #fff;
  background-color: #428bca;
}



/*
 * Main content
 */

.main {
  padding: 20px;
}

@media (min-width: 768px) {
  .main {
    padding-right: 40px;
    padding-left: 40px;
  }
}

.main .page-header {
  margin-top: 0;
}



/*
 * Placeholder dashboard ideas
 */

.placeholders {
  margin-bottom: 30px;
  text-align: center;
}

.placeholders h4 {
  margin-bottom: 0;
}

.placeholder {
  margin-bottom: 20px;
}

.placeholder img {
  display: inline-block;
  border-radius: 50%;
}
```

然后在 `src/main.js` 中导入自定义样式文件：

```js
// ...
import './assets/css/index.css'
// ...
```

操作完毕之后查看页面效果。

## 拆分头部组件

在 `src/components/AppHeader.vue` 文件中写入以下内容：

```html
<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">CRUD</a>
    </div>
  </div>
</nav>
</template>

<script>
</script>

<style>
</style>

```

然后在 `src/App.vue` 中加载使用：

```html
<template>
  <div id="app">
    ...
    <!-- 3. 使用 -->
    <AppHeader></AppHeader>
    ...
  </div>
</template>

<script>
// 1. 加载 AppHeader 组件
import AppHeader from './components/AppHeader'

export default {
  name: 'App',
  components: {
    AppHeader // 2. 注册到根组件
  }
}
</script>

<style>
</style>

```

## 拆分提取侧边栏组件

`src/components/AppSidebar.vue`:

```html
<template>
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <li class="active"><a href="#">Overview <span class="sr-only">(current)</span></a></li>
    <li><a href="#">Reports</a></li>
    <li><a href="#">Analytics</a></li>
    <li><a href="#">Export</a></li>
  </ul>
</div>
</template>

<script></script>

<style></style>

```

然后在 `src/App.vue` 根组件中加载使用：

```html
<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        ...
        <AppSidebar></AppSidebar>
        ...
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar
  }
}
</script>

<style>
</style>

```

## 拆分英雄列表组件

`src/components/HeroList.vue`:

```html
<template>
  <!-- 组件必须有一个根节点，.vue 文件中的 template 不算 -->
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>Header</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1,001</td>
            <td>Lorem</td>
            <td>ipsum</td>
            <td>dolor</td>
            <td>sit</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
          <tr>
            <td>1,002</td>
            <td>amet</td>
            <td>consectetur</td>
            <td>adipiscing</td>
            <td>elit</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
          ...
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
</script>

<style>
</style>

```

然后在 `src/App.vue` 根组件加载使用：

```html
<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppSidebar></AppSidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!--
            这里的内容组件不应该写死
            应用是动态的
            例如点击了英雄管理，则显示 HeroList.vue 组件
            点击了用户管理，则显示 UserList.vue 组件
           -->
          <HeroList></HeroList>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'
import AppSidebar from './components/AppSidebar'
import HeroList from './components/HeroList'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppSidebar,
    HeroList
  }
}
</script>

<style>
</style>

```

## 使用 Vue Router 实现页面导航管理

> Vue Router 能帮我们实现点击某个导航链接的时候动态的展示一个组件

1. 安装路由模块

```bash
npm i vue-router
```

2. 在 `main.js` 中加载

```js
...
import VueRouter from 'vue-router' // 加载路由模块

// 注册到 Vue 中才可以使用
Vue.use(VueRouter);

// ...
```

3. 在 `main.js` 中 `new` 出 `VueRouter` 实例，并挂载到根实例的 `router` 选项中

```js
// ...

// 配置路由表
const appRouter = new VueRouter({
  routes: [
  ]
})

// ...

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  // 配置实例选项 router 为你在上面 new 出来的 VueRouter 实例对象
  router: appRouter
});

```

4. 配置路由表

```js
// ...
// 配置路由表
const appRouter = new VueRouter({
  // routes 选项用来配置路由表
  // 当请求 /xxx 的时候，渲染 xxx 组件
  // routes 是一个数组，数组中存储一些固定格式的对象
  // 对象 path 表示请求的路径
  // 对象的 component 用来指定当你请求 path 路径的时候，渲染该组件
  // 现在的问题是？匹配到 path 的时候，组件往哪里渲染？
  // 在你的根组件预留一个路由的出口，用来告诉路由到匹配到某个 path 的时候，把该组件渲染到哪里
  routes: [
    {
      path: '/foo',
      component: {
        template: `<div>foo 组件啊</div>`
      }
    },
    {
      path: '/bar',
      component: {
        template: `<div>bar 组件啊</div>`
      }
    }
  ]
});
// ...

```

5. 在 `src/App.vue` 组件中留路由出口（告诉路由往哪里渲染 path 匹配到的组件）

```html
<template>
  <div id="app">
    <AppHeader></AppHeader>
    <div class="container-fluid">
      <div class="row">
        <AppSidebar></AppSidebar>
        <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <!-- <HeroList></HeroList> -->
          <!--
            <router-view></router-view> 组件标签是给路由看的，默认啥都没有
            它不是固定的，它标识路由出口标记
            当路由匹配到 path xxx 的时候，会将 router-view 替换到我们在路由表中配置好的组件
           -->
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>
...
```

6. 在侧边栏 `src/components/AppSidebar.vue` 组件中  增加两个导航链接用来导航 `foo` 和 `bar`

```html
<template>
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <li class="active"><a href="#">英雄管理 <span class="sr-only">(current)</span></a></li>
    <li><a href="#">用户管理</a></li>
    <li><a href="#">商品管理</a></li>
    <li><a href="#">订单管理</a></li>
    <!--
      导航链接必须以 # 开头，后面跟你在路由表中配好的 path 路径
     -->
    <li><a href="#/foo">Go Foo</a></li>
    <li><a href="#/bar">Go Bar</a></li>
  </ul>
</div>
</template>

<script></script>

<style></style>

```

7. 测试，恭喜你！

---

## 将路由导航到 .vue 单文件组件

`src/components/Foo.vue`:

```html
<template>
<div>
  Foo 组件
</div>
</template>

<script></script>
<style></style>

```

`src/components/Bar.vue`:

```html
<template>
<div>
  Bar 组件
</div>
</template>

<script></script>
<style></style>

```

`src/main.js`:

```js
// ...
// ...
import Foo from './components/Foo'
import Bar from './components/Bar'
import HeroList from './components/HeroList'

// ...
// ...

// 配置路由表
const appRouter = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo
      // component: {
      //   template: `<div>foo 组件啊</div>`
      // }
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/heros',
      component: HeroList
    }
  ]
});

// ...
```

---

## API Server

### 准备

```bash
git clone https://gitee.com/lipengzhou/vue-fe43.git
cd vue-fe43/resource/api-server
npm install
npm start
```

启动成功，你将看到如下输出：

![](README/README0.png)

### 获取英雄列表

- 请求路径：`http://localhost:3000/heros`
- 请求方法：`GET`

### 根据英雄id获取一个英雄

- 请求路径：`http://localhost:3000/heros/:id`
  + `:id` 需要给定一个英雄的 id
- 请求方法：`GET`

### 添加英雄

- 请求路径：`http://localhost:3000/heros`
- 请求方法：`POST`
- 请求体：

```json
{
  name: '英雄名称',
  gender: '英雄性别'
}
```

### 删除英雄

- 请求路径：`http://localhost:3000/heros/:id`
  + `:id` 需要给定一个英雄的 id
- 请求方法：`DELETE`

### 编辑英雄

- 请求路径：`http://localhost:3000/heros/:id`
  + `:id` 需要给定一个英雄的 id
- 请求方法：`PATCH`
- 请求体：

```json
{
  name: '英雄名称',
  gender: '英雄性别'
}
```

## 使用 axios 发起请求

1. 安装 axios 到项目中

```bash
npm i axios
```

2. 使用

```js
import axios from 'axios'

axios.get('http://localhost:3000/heros')
  .then(res => {
    console.log(res)
    console.log(res.data)
  });
```

---

## 英雄列表

`src/components/HeroList.vue`:

```html
<template>
  <!-- 组件必须有一个根节点，.vue 文件中的 template 不算 -->
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="add.html">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>性别</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in heros">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="javascript:window.confirm('Are you sure?')">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      heros: []
    }
  },
  created () {
    // 1. created 会自动执行
    // 2. 在 created 中的 this 当前组件
    // console.log('created')
    // 请求 http://localhost:3000/heros ，然后执行 function
    axios.get('http://localhost:3000/heros')
      .then(response => { // 当请求成功 success 的时候会自动调用该方法，这里使用箭头函数为了绑定外部 this
        this.heros = response.data // 更新 data 中数据从而驱动视图更新
      })
  }
}
</script>

<style>
</style>

```

---

## 添加英雄

### 添加组件并配置路由

`src/components/HeroAdd.vue`:

```html
<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
      </div>
      <div class="form-group">
        <label for="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile">
        <p class="help-block">Example block-level help text here.</p>
      </div>
      <div class="checkbox">
        <label>
          <input type="checkbox"> Check me out
        </label>
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script></script>
<style></style>

```

然后在 `src/main.js` 配置路由表：

```js
// ...
// ...

import HeroAdd from './components/HeroAdd'

// ...
// ...

// 配置路由表
const appRouter = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo
      // component: {
      //   template: `<div>foo 组件啊</div>`
      // }
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/heros',
      component: HeroList
    },
    {
      path: '/heros/add',
      component: HeroAdd
    }
  ]
});

// ...
// ...

```

修改 `HeroList.vue` 中 `Add` 的导航链接：

```html
<template>
  <!-- 组件必须有一个根节点，.vue 文件中的 template 不算 -->
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="#/heros/add">Add</a>
    ...
    ...
  </div>
</template>

...
...

```

点击 `Add` 链接开始测试。

### 实现添加英雄功能

`src/component/HeroAdd.vue`:

```html
<template>
  <div>
    <h2 class="sub-header">Add Hero</h2>
    <!--
      Vue 为你的事件绑定提供了一个修饰符： .prevent 可以阻止事件的默认行为
      这样就省的你自己再去 e.preventDefault()
     -->
    <form @submit.prevent="handleAdd">
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" class="form-control" id="name" v-model="hero.name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" class="form-control" id="gender" v-model="hero.gender">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</template>

<script>
  import axios from 'axios'
  // 任何组件的 JavaScript 都必须使用 export default 导出一个对象
  // 组件的选项都写在这个导出的对象中
  // 添加英雄：
  //   1. 注册表单提交事件处理函数
  //   2. 拿到表单数据
  //      根据表单初始化一个数据在对象在 data 中
  //      然后把该对象的属性成员通过双向数据绑定 v-model 绑定到具体的表单控件上
  //      然后我们就可以直接通过获取数据对象从而获取表单数据
  //   3. 表单验证
  //   4. 验证通过，发请求提交表单数据
  //   5. 接收响应，做交互处理，如果添加英雄成功，我们让页面跳转到 /heros
  export default {
    data () {
      return {
        hero: {
          name: '',
          gender: ''
        }
      }
    },
    methods: {
      handleAdd (e) {
        // 因为表单有一个默认请求行为，所以我们这里要把它阻止掉
        // e.preventDefault()
        // console.log('handleAdd 被调用了')
        // console.log(this.hero)
        axios.post('http://localhost:3000/heros', this.hero)
          .then(res => {
            // 如果 res.statsu === 201
            // 就让界面导航到 /heros
            if (res.status === 201) {
              this.$router.push('/heros')
            }
          })
      }
    }
  }
</script>
<style></style>
```

---

## 删除英雄

`src/components/HeroList.vue`:

```html
<template>
  <!-- 组件必须有一个根节点，.vue 文件中的 template 不算 -->
  <div>
    <h2 class="sub-header">Hero List</h2>
    <a class="btn btn-success" href="#/heros/add">Add</a>
    <div class="table-responsive">
      <table class="table table-striped">
        <thead>
          <tr>
            <th>#</th>
            <th>性别</th>
            <th>性别</th>
            <th>操作</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in heros">
            <td>{{ item.id }}</td>
            <td>{{ item.name }}</td>
            <td>{{ item.gender }}</td>
            <td>
              <a href="edit.html">edit</a>
              &nbsp;&nbsp;
              <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      heros: []
    }
  },
  created () {
    // 1. created 会自动执行
    // 2. 在 created 中的 this 当前组件
    // console.log('created')
    // 请求 http://localhost:3000/heros ，然后执行 function
    // axios.get('http://localhost:3000/heros')
    //   .then(response => { // 当请求成功 success 的时候会自动调用该方法，这里使用箭头函数为了绑定外部 this
    //     this.heros = response.data // 更新 data 中数据从而驱动视图更新
    //   })

    // 在 created 函数中可以直接调用 methods 选项中方法
    this.loadHeros()
  },
  methods: {
    // 1. 为删除的按钮绑定点击事件
    // 2. 在事件处理函数中拿到要删除的英雄 id
    // 3. 发请求。执行删除操作
    // 4. 根据响应做交互操作
    handleDelete (id) {
      // confirm 方法有个返回值
      //  用户点击确定返回 true
      //  用户点击取消返回 false
      //
      if (window.confirm('Are you sure?') === true) { // 提示用户，如果用户点击了确定才执行删除操作
        // axios.delete('http://localhost:3000/heros/' + id)
        axios.delete(`http://localhost:3000/heros/${id}`)
          .then(res => {
            if (res.status === 200) {
              // 删除成功，重新加载英雄列表数据
              // axios.get('http://localhost:3000/heros')
              //   .then(response => { // 当请求成功 success 的时候会自动调用该方法，这里使用箭头函数为了绑定外部 this
              //     this.heros = response.data // 更新 data 中数据从而驱动视图更新
              //   })

              // 我们可以直接在 methods 方法中互相调用其它 methods 成员
              this.loadHeros()
            }
          })
      }
    },

    // 由于 created 和 handleDelete 方法中写了重复的代码用于请求英雄列表数据
    // 所以我们这可以优化封装为一个方法，然后在 created 和 handleDelete 中去调用
    loadHeros () {
      axios.get('http://localhost:3000/heros')
        .then(response => { // 当请求成功 success 的时候会自动调用该方法，这里使用箭头函数为了绑定外部 this
          this.heros = response.data // 更新 data 中数据从而驱动视图更新
        })
    }
  }
}
</script>

<style>
</style>

```

---

## 编辑英雄

### 创建编辑英雄组件并配置路由导航

创建编辑英雄组件 `src/components/HeroEdit.vue`:

```html
<template>
<div>
  <div>
    <h2 class="sub-header">Edit Hero</h2>
    <form @submit.prevent="handleEdit">
      <div class="form-group">
        <label for="name">英雄名称</label>
        <input type="text" class="form-control" id="name" v-model="hero.name">
      </div>
      <div class="form-group">
        <label for="gender">英雄性别</label>
        <input type="text" class="form-control" id="gender" v-model="hero.gender">
      </div>
      <button type="submit" class="btn btn-success">Submit</button>
    </form>
  </div>
</div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      hero: {
        name: '',
        gender: ''
      }
    }
  },
  created () {
  },

  methods: {
    handleEdit () {}
  }
}
</script>

<style>
</style>

```

在 `src/main.js` 中增加路由表配置：

```js
// ...
// ...

import HeroEdit from './components/HeroEdit'

// ...
// ...

// 配置路由表
const appRouter = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo
    },
    {
      path: '/bar',
      component: Bar
    },
    {
      path: '/heros',
      component: HeroList
    },
    {
      path: '/heros/add',
      component: HeroAdd
    },
    {
      // :id 表示动态的
      // 在该路径中，:id 需要给一个具体的英雄的 id
      // 也就是说
      // /heros/edit/1、/heros/edit/2、/heros/edit/3、/heros/edit/4、/heros/edit/*
      // 都会匹配到 HeroEdit 组件
      // 然后我们就可以在 HeroEdit 组件中通过 this.$route.params 来获取这个 :id 的值了
      // :xx 表示一种路径规则，用来给路径留坑的，需要起个名字
      // 将来我就可以在被匹配到的组件中通过 this.$route.params.坑名 来获取这个值了
      path: '/heros/edit/:heroId',
      component: HeroEdit
    }
  ]
});

// ...
// ...
```

修改 `src/components/HeriList.vue` 中点击列表项编辑的导航的链接：

```html{8}
<template>
  ...
  <tr v-for="item in heros">
    <td>{{ item.id }}</td>
    <td>{{ item.name }}</td>
    <td>{{ item.gender }}</td>
    <td>
      <a v-bind:href="'#/heros/edit/' + item.id">edit</a>
      &nbsp;&nbsp;
      <a href="#" @click.prevent="handleDelete(item.id)">delete</a>
    </td>
  </tr>
  ...
</template>
```

点击编辑链接测试。

### 显示被编辑的英雄信息

`src/components/HeroEdit.vue`:

```html
<script>
import axios from 'axios'

export default {
  data () {
    return {
      hero: {
        name: '',
        gender: ''
      }
    }
  },

  // 我们可以在组件的 created 函数中使用 this.$route.params 获取动态路径 id
  created () {
    const {heroId} = this.$route.params
    axios.get(`http://localhost:3000/heros/${heroId}`)
      .then(res => {
        if (res.status === 200) {
          this.hero = res.data
        }
      })
  },

  methods: {
    handleEdit () {}
  }
}
</script>

```

### 完成编辑表单提交

`src/components/HeroEdit.vue`:

```html
<script>
import axios from 'axios'

export default {
  data () {
    return {
      hero: {
        name: '',
        gender: ''
      }
    }
  },

  // 我们可以在组件的 created 函数中使用 this.$route.params 获取动态路径 id
  created () {
    const {heroId} = this.$route.params
    axios.get(`http://localhost:3000/heros/${heroId}`)
      .then(res => {
        if (res.status === 200) {
          this.hero = res.data
        }
      })
  },

  methods: {
    handleEdit () {
      axios.patch(`http://localhost:3000/heros/${this.hero.id}`, this.hero)
        .then(res => {
          if (res.status === 200) {
            this.$router.push('/heros')
          }
        })
    }
  }
}
</script>
```

---

## 使用 router-link 处理导航高亮

`src/components/AppSidebar.vue`:

```html
<template>
<div class="col-sm-3 col-md-2 sidebar">
  <ul class="nav nav-sidebar">
    <router-link to="/heros" tag="li" active-class="active">
      <a>英雄管理</a>
    </router-link>
    <router-link to="/foo" tag="li" active-class="active">
      <a>Go Foo</a>
    </router-link>
    <router-link to="/bar" tag="li" active-class="active">
      <a>Go Bar</a>
    </router-link>
  </ul>
</div>
</template>
```

---

## The End.
