# 第2章 起步

---

## 安装

- Vue.js 不支持 IE8 及其以下版本
- 最新稳定版本：2.5.16
- 每个版本的更新日志见 [Github Releases](https://github.com/vuejs/vue/releases)
- 直接下载
  + 开发版本：https://vuejs.org/js/vue.js
  + 生产版本：https://vuejs.org/js/vue.min.js
- CDN
  - `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>`
- 使用 `npm` 下载（默认安装最新稳定版）
  + `npm install vue`

---

## Hello World

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Hello World</title>
</head>
<body>
  <div id="app">
    <h1>{{ message }}</h1>
  </div>
  <script src="../node_modules/vue/dist/vue.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: {
        message: 'Hello Vue.js!'
      }
    })
  </script>
</body>
</html>
```

---

## Vue 实例

每个 Vue 应用都是通过用 `Vue` 函数创建一个新的 **Vue 实例**开始的：

```
var vm = new Vue({
  // 选项
})
```

虽然没有完全遵循 [MVVM 模型](https://zh.wikipedia.org/wiki/MVVM)，但是 Vue 的设计也受到了它的启发。因此在文档中经常会使用 `vm` (ViewModel 的缩写) 这个变量名表示 Vue 实例。

当创建一个 Vue 实例时，你可以传入一个**选项对象**。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 [API 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 中浏览完整的选项列表。

一个 Vue 应用由一个通过 `new Vue` 创建的**根 Vue 实例**，以及可选的嵌套的、可复用的组件树组成。举个例子，一个 todo 应用的组件树可以是这样的：

```
根实例
└─ TodoList
   ├─ TodoItem
   │  ├─ DeleteTodoButton
   │  └─ EditTodoButton
   └─ TodoListFooter
      ├─ ClearTodosButton
      └─ TodoListStatistics
```

我们会在稍后的[组件系统](https://cn.vuejs.org/v2/guide/components.html)章节具体展开。不过现在，你只需要明白所有的 Vue 组件都是 Vue 实例，并且接受相同的选项对象 (一些根实例特有的选项除外)。

## 文本绑定

- `{{data}}`

## 属性绑定

- `v-bind`

---

## 表单控件双向数据绑定

- `text`
- `textarea`
- `checkbox`
- `radio`
- `select`
- ...

---

## 条件渲染

- `v-if`

## 列表渲染

- `v-for`

---

## 事件处理

- `v-on`

---

## 综合案例：`Todo List`

![](./assets/getting-started0.png)

- 任务列表展示
- 添加任务
- 切换任务完成状态
- 删除单个任务
- 删除所有已完成任务
- 显示所有任务数量
- 显示所有未完成任务数

---

## 使用总结

- Vue 最大程度上减少了页面上的 DOM 操作
- 让开发人员更专注于业务操作
- 通过简洁的指令结合页面结构与逻辑数据
- 通过组件化方便模板重用以及增加可维护性
- 代码结构更合理
- 维护成本更低
- **VueJS 解放了传统 JavaScript 中频繁的 DOM 操作**
