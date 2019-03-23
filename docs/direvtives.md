# 指定

## 概念及语法

指令 (Directives) 是带有 `v-` 前缀的特殊属性。指令属性的值预期是**单个 JavaScript 表达式**(`v-for` 是例外情况，稍后我们再讨论)。指令的职责是，当表达式的值改变时，将其产生的连带影响，响应式地作用于 DOM。

例如 `v-if` 指令：

```html
<p v-if="seen">现在你看到我了</p>
```

这里，`v-if` 指令将根据表达式 `seen` 的值的真假来插入/移除 `<p>` 元素。

### 指令参数

一些指令能够接收一个“参数”，在指令名称之后以冒号表示。例如，`v-bind` 指令可以用于响应式地更新 HTML 属性：

```html
<a v-bind:href="url">...</a>
```

在这里 `href` 是参数，告知 `v-bind` 指令将该元素的 `href` 属性与表达式 `url` 的值绑定。

另一个例子是 `v-on` 指令，它用于监听 DOM 事件：

```html
<a v-on:click="doSomething">...</a>
```

在这里参数是监听的事件名。我们也会更详细地讨论事件处理。



### 指令修饰符

一些指令还可以添加指令修饰符，修饰符 (Modifiers) 是以半角句号 `.` 指明的特殊后缀，用于指出一个指令应该以特殊方式绑定。例如，`.prevent` 修饰符告诉 `v-on` 指令对于触发的事件调用 `event.preventDefault()`：

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

在接下来对 [`v-on`](https://cn.vuejs.org/v2/guide/events.html#%E4%BA%8B%E4%BB%B6%E4%BF%AE%E9%A5%B0%E7%AC%A6) 和 [`v-for`](https://cn.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6) 等功能的探索中，你会看到修饰符的其它例子。



### 指令缩写

`v-` 前缀作为一种视觉提示，用来识别模板中 Vue 特定的特性。当你在使用 Vue.js 为现有标签添加动态行为 (dynamic behavior) 时，`v-` 前缀很有帮助，然而，对于一些频繁用到的指令来说，就会感到使用繁琐。同时，在构建由 Vue.js 管理所有模板的[单页面应用程序 (SPA - single page application)](https://en.wikipedia.org/wiki/Single-page_application) 时，`v-` 前缀也变得没那么重要了。因此，Vue.js 为 `v-bind` 和 `v-on` 这两个最常用的指令，提供了特定简写：

`v-bind` 缩写：

```html
<!-- 完整语法 -->
<a v-bind:href="url">...</a>

<!-- 缩写 -->
<a :href="url">...</a>
```

`v-on` 缩写：

```html
<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>

<!-- 缩写 -->
<a @click="doSomething">...</a>
```



## 系统内置指令



### v-text

### v-html

### v-show

### v-if

### v-else

### v-else-if

### v-for

### v-on

### v-bind

### v-model

### v-pre

### v-cloak

### 总结

- [v-text](https://cn.vuejs.org/v2/api/#v-text)
  - 和 `{{}}` 一样的，唯一的区别是
  - `{{}}` 会造成闪烁问题
  - `v-text` 不会有闪烁问题
  - 如果还想用 `{{}}` 又不想有闪烁问题，则使用 `v-cloak` 来处理
- [v-html](https://cn.vuejs.org/v2/api/#v-html)
- [v-show](https://cn.vuejs.org/v2/api/#v-show)
  - 条件显示和隐藏
  - 无论真假，都会渲染显示在 DOM 结构中
  - 条件为真，则让 display 显示
  - 条件为假，则 display 不显示
  - 如果需要频繁的切换显示和隐藏，则使用 v-show
- [v-if](https://cn.vuejs.org/v2/api/#v-if)
  - 真正的条件渲染
  - 条件为真，则渲染这个 DOM
  - 条件为假，则移除不渲染这个 DOM
  - 如果只是一次显示或隐藏，则建议 v-if
  - v-if 和 v-show
    - 一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。
- [v-else](https://cn.vuejs.org/v2/api/#v-else)
- [v-else-if](https://cn.vuejs.org/v2/api/#v-else-if)
- [v-for](https://cn.vuejs.org/v2/api/#v-for)
- [v-on](https://cn.vuejs.org/v2/api/#v-on)
- [v-bind](https://cn.vuejs.org/v2/api/#v-bind)
- [v-model](https://cn.vuejs.org/v2/api/#v-model)
- [v-pre](https://cn.vuejs.org/v2/api/#v-pre)
- [v-cloak](https://cn.vuejs.org/v2/api/#v-cloak)
  - 如果还想用 `{{}}` 又不想有闪烁问题，则使用 `v-cloak` 来处理
  - 在头部加一个特殊的样式：`[v-cloak] {display: none;}`
  - 然后在被 Vue 管理的模板入口节点上作用 `v-cloak` 指令
  - 原理：默认一开始被 Vue 管理的模板是隐藏着的，当 Vue 解析处理完 DOM 模板之后，会自动把这个样式去除，然后就显示出来
- [v-once](https://cn.vuejs.org/v2/api/#v-once)


## 自定义指令

在 Vue 中除了核心功能默认内置的指令 (例如 `v-model` 和 `v-show`)，Vue 也允许注册自定义指令。

> 有的情况下，我们仍然需要对普通 DOM 元素进行底层操作，这时候就会用到自定义指令。

### 语法：注册及使用

举个让输入框自动聚焦的例子，如下。

全局注册：

```javascript
// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
```

也可以局部注册：

```javascript
directives: {
  focus: {
    // 指令的定义
    inserted: function (el) {
      el.focus()
    }
  }
}
```

使用：

```html
<!-- 当页面加载时，该元素将获得焦点 -->
<input v-focus>
```

注意事项：

- 在模板中使用自定义指令必须加上 `v-` 前缀
- 对于驼峰命名法的自定义指令，在使用的时候使用 `-` 连接即可。
- 全局注册的自定义指令可以在任何组件中使用。
- 组件内注册的自定义指令只能在被该组件管理的模板中使用。



### 钩子函数

一个指令定义对象可以提供如下几个钩子函数 (均为可选)：

- `bind`：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- `update`：所在组件的 VNode 更新时调用，**但是可能发生在其子 VNode 更新之前**。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新 (详细的钩子函数参数见下)。
- `componentUpdated`：指令所在组件的 VNode **及其子 VNode** 全部更新后调用。
- `unbind`：只调用一次，指令与元素解绑时调用。

下面我们用一个例子来验证文档中的描述：

```html
<div id="app">
  <input type="checkbox" v-model="seen">
  <h1 v-if="seen" v-demo>{{ message }}</h1>
  <input type="text" v-model="message">
</div>
```

```javascript
Vue.directive('demo', {
  bind(el, binding) {
    console.log('binding', el.parentNode) // null
  },
  inserted: function (el) {
    console.log('inserted', el.parentNode) // <div id="app">...</div>
  },
  update(el, binding) {
    console.log('update', el.innerHTML) // 'Hello Vue.js!'
  },
  componentUpdated(el, binding) {
    console.log('componentUpdated', el.innerHTML) // 'Hello'
  },
  unbind(el, binding) {
    console.log('unbind')
  }
})

new Vue({
  el: '#app',
  data: {
    seen: true,
    message: 'Hello Vue.js!'
  }
})
```

总结：

- bind 时父节点为 null，inserted 时父节点存在
- update 和 componentUpdated 就是更新前和更新后的区别
- unbind 可以做一些收尾工作，例如清除定时器
- ​文档说的没错 😂

### 钩子函数参数

指令钩子函数会被传入以下参数：

- `el`：指令所绑定的元素，可以用来直接操作 DOM 。
- `binding` 一个对象，包含以下属性：
  - `name`：指令名，不包括 `v-` 前缀。
  - `value`：指令的绑定值，例如：`v-my-directive="1 + 1"` 中，绑定值为 `2`。
  - `oldValue`：指令绑定的前一个值，仅在 `update` 和 `componentUpdated` 钩子中可用。无论值是否改变都可用。
  - `expression`：字符串形式的指令表达式。例如 `v-my-directive="1 + 1"` 中，表达式为 `"1 + 1"`。
  - `arg`：传给指令的参数，可选。例如 `v-my-directive:foo` 中，参数为 `"foo"`。
  - `modifiers`：一个包含修饰符的对象。例如：`v-my-directive.foo.bar` 中，修饰符对象为 `{ foo: true, bar: true }`。
- `vnode`：Vue 编译生成的虚拟节点。移步 [VNode API](https://cn.vuejs.org/v2/api/#VNode-%E6%8E%A5%E5%8F%A3) 来了解更多详情。
- `oldVnode`：上一个虚拟节点，仅在 `update` 和 `componentUpdated` 钩子中可用。

!> 除了 `el` 之外，其它参数都应该是只读的，切勿进行修改。如果需要在钩子之间共享数据，建议通过元素的 [`dataset`](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/dataset) 来进行。

这是一个使用了这些属性的自定义钩子样例：



```html
<div id="hook-arguments-example" v-demo:foo.a.b="message"></div>
```

```javascript
Vue.directive('demo', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    el.innerHTML =
      'name: '       + s(binding.name) + '<br>' +
      'value: '      + s(binding.value) + '<br>' +
      'expression: ' + s(binding.expression) + '<br>' +
      'argument: '   + s(binding.arg) + '<br>' +
      'modifiers: '  + s(binding.modifiers) + '<br>' +
      'vnode keys: ' + Object.keys(vnode).join(', ')
  }
})

new Vue({
  el: '#hook-arguments-example',
  data: {
    message: 'hello!'
  }
})
```

```
name: "demo"
value: "hello!"
expression: "message"
argument: "foo"
modifiers: {"a":true,"b":true}
vnode keys: tag, data, children, text, elm, ns, context, fnContext, fnOptions, fnScopeId, key, componentOptions, componentInstance, parent, raw, isStatic, isRootInsert, isComment, isCloned, isOnce, asyncFactory, asyncMeta, isAsyncPlaceholder
```


### 函数简写

在很多时候，你可能想在 `bind` 和 `update` 时触发相同行为，而不关心其它的钩子。比如这样写:

```javascript
Vue.directive('color-swatch', function (el, binding) {
  el.style.backgroundColor = binding.value
})
```

### 对象字面量

如果指令需要多个值，可以传入一个 JavaScript 对象字面量。记住，指令函数能够接受所有合法的 JavaScript 表达式。

```html
<div v-demo="{ color: 'white', text: 'hello!' }"></div>
```

```javascript
Vue.directive('demo', function (el, binding) {
  console.log(binding.value.color) // => "white"
  console.log(binding.value.text)  // => "hello!"
})
```

### 自定义指令强化

- 模拟实现一些内置的系统指令
