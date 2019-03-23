# 第3章 模板语法

## Vue 实例

- 每个 Vue 应用都是通过用 Vue 函数创建一个新的 Vue 实例开始的
- 当创建一个 Vue 实例时，你可以传入一个选项对象
- el 选项
  + 不能是 html、body 标签
- data 选项
  + data 中的数据就是我们平常使用模板引擎所常见的模板数据对象
  + data 中的数据是响应式的，即数据改变之后随之驱动视图发生变化
  + 只有当实例被创建时 data 中存在的属性才是响应式的
  + 注意：动态为实例添加属性是无效的，所以我们要在实例初始化开始的时候初始化我们的 data 选项数据
- methods 选项
- ...
- 不同选项有不同功能作用，更多实例选项参考[官方 API 文档](https://cn.vuejs.org/v2/api/)

## 创建一个 Vue 的实例

每个 Vue 应用都是通过 `Vue` 函数创建一个新的 **Vue 实例**开始的：

```javascript
var vm = new Vue({
  // 选项
});
```

当创建一个 Vue 实例时，你可以传入一个**选项对象**。这篇教程主要描述的就是如何使用这些选项来创建你想要的行为。作为参考，你也可以在 [API 文档](https://cn.vuejs.org/v2/api/#%E9%80%89%E9%A1%B9-%E6%95%B0%E6%8D%AE) 中浏览完整的选项列表。

## `el` 选项

> 参考文档：https://cn.vuejs.org/v2/api/#el

提供一个在页面上已存在的 DOM 元素作为 Vue 实例的挂载目标。可以是 CSS 选择器，也可以是一个 HTMLElement 实例。

- 不能作用到 `<html>` 或者 `<body>` 上
- 也可以通过 `实例.$mount()` 手动挂载

## `data` 选项

> 参考文档：https://cn.vuejs.org/v2/api/#data

- 响应式数据
- 可以通过 `vm.$data` 访问原始数据对象
- Vue 实例也代理了 data 对象上所有的属性，因此访问 `vm.a` 等价于访问 `vm.$data.a`
- 视图中绑定的数据必须显式的初始化到 data 中

## `methods` 选项

> 参考文档：https://cn.vuejs.org/v2/api/#methods

methods 将被混入到 Vue 实例中。可以直接通过 VM 实例访问这些方法，或者在指令表达式中使用。方法中的 `this` 自动绑定为 Vue 实例。

!> 注意，**不应该使用箭头函数来定义 method 函数** (例如 `plus: () => this.a++`)。理由是箭头函数绑定了父级作用域的上下文，所以 `this` 将不会按照期望指向 Vue 实例，`this.a` 将是 undefined。

示例：

```javascript
var vm = new Vue({
  data: { a: 1 },
  methods: {
    plus: function () {
      this.a++
    }
  }
})
vm.plus()
vm.a // 2
```

---

## 实例生命周期

先来听一段延伸法师的人生感悟：[《绳命》](https://www.youtube.com/watch?v=Ps1Er1BSWyA)。

<iframe width="560" height="315" src="https://www.youtube.com/embed/Ps1Er1BSWyA?rel=0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

> 生命是如此的美丽，让我们祝福这所有，让我们祝福生命如此的精彩！

---

---

生命周期 这个词挺起来也是挺吓人的，在很多个编程领域都存在着这么一个说法。对于一个萌新来说，确实比较难懂。

> 举个例子就好理解多了，人的一生呐，就是从肚子里钻出来，然后度过童年，青年，中年，老年，然后再钻回肚子，哦不，是钻到土地下，这就是一个人的生命周期，从出生到死亡，有着很多个阶段。

![生命周期](https://ooo.0o0.ooo/2017/03/31/58dd2edfc6e95.png)

同样的，实例，一开始我们说了，需要被 构造 出来，紧接着他也会经历它生命中的各个阶段，然后死掉。

所以，要了解一个人，我们就要从他一生中的各个阶段去了解它，了解实例也一样！

> 进入童年就要上学，青年就要上班，中年就要。。也要上班，老年要退休。

所以说，每进入一个阶段都可以干一件什么事情。Vue 中也是这样的。所以 Vue 提供了一些称之为 钩子(HOOK) 的东西，为我们提供了机会去操作某个阶段的行为。

比如说 进入童年 就可以比喻为一个钩子，上学 就可以比喻为这个阶段要让他做的事情。

![Vue实例生命周期](https://ooo.0o0.ooo/2017/03/31/58dd304f6c094.png)

好了，回过头来再看一下官方的生命周期图：

![Vue实例生命周期](https://cn.vuejs.org/images/lifecycle.png)

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Document</title>
    <script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>
  </head>
  <body>
    <div id="app">
      <h2>{{ msg }}</h2>
    </div>
  </body>
</html>
<script>
  var vm = new Vue({
    //1) 生命周期之创建阶段
    beforeCreate() {
      console.group('---------beforeCreate调用--------')
      // %c: 给调试信息设置样式
      // $s: 通过string字符串方式输出信息
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)   // 获得vue挂载的容器
      console.log('%c%s', 'color:red', 'vue之data现在的样子：' + this.$data)  // 获得全部的data成员
      console.log('%c%s', 'color:red', 'vue之methods方法现在的样子：' + this.getInfo) // 输出getInfo的方法成员
    },
    created() {
      console.group('---------created调用--------')
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)
      console.log('%c%s', 'color:red', 'vue之data现在的样子：' + this.$data)
      console.log('%c%s', 'color:red', 'vue之data的msg数据：' + this.msg)
      console.log('%c%s', 'color:red', 'vue之methods方法现在的样子：' + this.getInfo)
      console.log('%c%s', 'color:red', 'vue之methods方法现在的样子：' + this.getInfo())
    },
    beforeMount() {
      console.group('---------beforeMount调用--------')
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)
      console.log(this.$el)   // 获得容器的信息
      console.log('%c%s', 'color:red', 'vue之data现在的样子：' + this.$data)
      console.log(
        '%c%s',
        'color:red',
        '现在页面容器h2的内容为：' + document.querySelector('h2').innerHTML
      )
    },
    mounted() {
      console.group('---------mounted调用--------')
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)
      console.log(this.$el)
      console.log('%c%s', 'color:red', 'vue之data现在的样子：' + this.$data)
      console.log(
        '%c%s',
        'color:red',
        '现在页面容器h2的内容为：' + document.querySelector('h2').innerHTML
      )
    },
    //2) 生命周期之运行阶段
    beforeUpdate() {
      console.group('---------beforeUpdate调用--------')
      console.log(
        '%c%s',
        'color:red',
        'h2数据更新之前的效果：' + document.querySelector('h2').innerHTML
      )
    },
    updated() {
      console.group('---------updated调用--------')
      console.log(
        '%c%s',
        'color:red',
        'h2数据更新之后的效果：' + document.querySelector('h2').innerHTML
      )
    },
    //3) 生命周期之销毁阶段
    beforeDestroy() {
      console.group('---------beforeDestroy调用--------')
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)
    },
    destroyed() {
      console.group('---------destroyed调用--------')
      console.log('%c%s', 'color:red', 'vue之el现在的样子：' + this.$el)
    },

    el: '#app',
    data: {
      msg: '生命周期学习篇'
    },
    methods: {
      getInfo() {
        return 'study vue'
      }
    }
  })
</script>

```





运行代码，打开控制台我们在里面可以看到几个钩子：

- beforeCreate
  + 在实例初始化之后，数据观测 (data observer) 和 event/watcher 事件配置之前被调用。
- created
  + 在实例创建完成后被立即调用。在这一步，实例已完成以下的配置：数据观测 (data observer)，属性和方法的运算，watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
- beforeMount
  + 在挂载开始之前被调用：相关的 render 函数首次被调用。
- mounted
  + el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$el 也在文档内。
- beforeUpdate
  + 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
  + 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
- updated
  + 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
- activated
- deactivated
- beforeDestroy
- destroyed
- errorCaptured





参考文档：

- [Vue 官网 - 实例生命周期](https://cn.vuejs.org/v2/guide/instance.html#实例生命周期)
- [生命周期钩子函数 API 文档](https://cn.vuejs.org/v2/api/#选项-生命周期钩子)
- 

---

## 插值绑定

### [文本](https://cn.vuejs.org/v2/guide/syntax.html#%E6%96%87%E6%9C%AC)

数据绑定最常见的形式就是使用“Mustache”语法 (双大括号) 的文本插值：

```
<span>Message: {{ msg }}</span>
```

Mustache 标签将会被替代为对应数据对象上 `msg` 属性的值。无论何时，绑定的数据对象上 `msg` 属性发生了改变，插值处的内容都会更新。

通过使用 [v-once 指令](https://cn.vuejs.org/v2/api/#v-once)，你也能执行一次性地插值，当数据改变时，插值处的内容不会更新。但请留心这会影响到该节点上的其它数据绑定：

```
<span v-once>这个将不会改变: {{ msg }}</span>
```

### [原始 HTML](https://cn.vuejs.org/v2/guide/syntax.html#%E5%8E%9F%E5%A7%8B-HTML)

双大括号会将数据解释为普通文本，而非 HTML 代码。为了输出真正的 HTML，你需要使用 `v-html` 指令：

```
<p>Using mustaches: {{ rawHtml }}</p>
<p>Using v-html directive: <span v-html="rawHtml"></span></p>
```

Using mustaches: <span style="color: red">This should be red.</span>

Using v-html directive: This should be red.

这个 `span` 的内容将会被替换成为属性值 `rawHtml`，直接作为 HTML——会忽略解析属性值中的数据绑定。注意，你不能使用 `v-html` 来复合局部模板，因为 Vue 不是基于字符串的模板引擎。反之，对于用户界面 (UI)，组件更适合作为可重用和可组合的基本单位。

你的站点上动态渲染的任意 HTML 可能会非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请只对可信内容使用 HTML 插值，**绝不要**对用户提供的内容使用插值。

### [特性](https://cn.vuejs.org/v2/guide/syntax.html#%E7%89%B9%E6%80%A7)

Mustache 语法不能作用在 HTML 特性上，遇到这种情况应该使用 [v-bind 指令](https://cn.vuejs.org/v2/api/#v-bind)：

```
<div v-bind:id="dynamicId"></div>
```

在布尔特性的情况下，它们的存在即暗示为 `true`，`v-bind` 工作起来略有不同，在这个例子中：

```
<button v-bind:disabled="isButtonDisabled">Button</button>
```

如果 `isButtonDisabled` 的值是 `null`、`undefined` 或 `false`，则 `disabled` 特性甚至不会被包含在渲染出来的 `<button>` 元素中。

### [使用 JavaScript 表达式](https://cn.vuejs.org/v2/guide/syntax.html#%E4%BD%BF%E7%94%A8-JavaScript-%E8%A1%A8%E8%BE%BE%E5%BC%8F)

迄今为止，在我们的模板中，我们一直都只绑定简单的属性键值。但实际上，对于所有的数据绑定，Vue.js 都提供了完全的 JavaScript 表达式支持。

```
{{ number + 1 }}

{{ ok ? 'YES' : 'NO' }}

{{ message.split('').reverse().join('') }}

<div v-bind:id="'list-' + id"></div>
```

这些表达式会在所属 Vue 实例的数据作用域下作为 JavaScript 被解析。有个限制就是，每个绑定都只能包含**单个表达式**，所以下面的例子都**不会**生效。

```
<!-- 这是语句，不是表达式 -->
{{ var a = 1 }}

<!-- 流控制也不会生效，请使用三元表达式 -->
{{ if (ok) { return message } }}
```

模板表达式都被放在沙盒中，只能访问全局变量的一个白名单，如 `Math` 和 `Date` 。你不应该在模板表达式中试图访问用户定义的全局变量。

---

## 计算属性

## [计算属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7)

模板内的表达式非常便利，但是设计它们的初衷是用于简单运算的。在模板中放入太多的逻辑会让模板过重且难以维护。例如：

```
<div id="example">
  {{ message.split('').reverse().join('') }}
</div>
```

在这个地方，模板不再是简单的声明式逻辑。你必须看一段时间才能意识到，这里是想要显示变量 `message` 的翻转字符串。当你想要在模板中多次引用此处的翻转字符串时，就会更加难以处理。

所以，对于任何复杂逻辑，你都应当使用**计算属性**。

### [基础例子](https://cn.vuejs.org/v2/guide/computed.html#%E5%9F%BA%E7%A1%80%E4%BE%8B%E5%AD%90)

```
<div id="example">
  <p>Original message: "{{ message }}"</p>
  <p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
```

```
var vm = new Vue({
  el: '#example',
  data: {
    message: 'Hello'
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function () {
      // `this` 指向 vm 实例
      return this.message.split('').reverse().join('')
    }
  }
})
```

结果：

Original message: "Hello"

Computed reversed message: "olleH"

这里我们声明了一个计算属性 `reversedMessage`。我们提供的函数将用作属性 `vm.reversedMessage` 的 getter 函数：

```
console.log(vm.reversedMessage) // => 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // => 'eybdooG'
```

你可以打开浏览器的控制台，自行修改例子中的 vm。`vm.reversedMessage` 的值始终取决于 `vm.message` 的值。

你可以像绑定普通属性一样在模板中绑定计算属性。Vue 知道 `vm.reversedMessage`依赖于 `vm.message`，因此当 `vm.message` 发生改变时，所有依赖 `vm.reversedMessage` 的绑定也会更新。而且最妙的是我们已经以声明的方式创建了这种依赖关系：计算属性的 getter 函数是没有副作用 (side effect) 的，这使它更易于测试和理解。

### [计算属性缓存 vs 方法](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%BC%93%E5%AD%98-vs-%E6%96%B9%E6%B3%95)

你可能已经注意到我们可以通过在表达式中调用方法来达到同样的效果：

```
<p>Reversed message: "{{ reversedMessage() }}"</p>
```

```
// 在组件中
methods: {
  reversedMessage: function () {
    return this.message.split('').reverse().join('')
  }
}
```

我们可以将同一函数定义为一个方法而不是一个计算属性。两种方式的最终结果确实是完全相同的。然而，不同的是**计算属性是基于它们的依赖进行缓存的**。只在相关依赖发生改变时它们才会重新求值。这就意味着只要 `message` 还没有发生改变，多次访问 `reversedMessage` 计算属性会立即返回之前的计算结果，而不必再次执行函数。

这也同样意味着下面的计算属性将不再更新，因为 `Date.now()` 不是响应式依赖：

```
computed: {
  now: function () {
    return Date.now()
  }
}
```

相比之下，每当触发重新渲染时，调用方法将**总会**再次执行函数。

我们为什么需要缓存？假设我们有一个性能开销比较大的计算属性 **A**，它需要遍历一个巨大的数组并做大量的计算。然后我们可能有其他的计算属性依赖于 **A** 。如果没有缓存，我们将不可避免的多次执行 **A** 的 getter！如果你不希望有缓存，请用方法来替代。

### [计算属性 vs 侦听属性](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7-vs-%E4%BE%A6%E5%90%AC%E5%B1%9E%E6%80%A7)

Vue 提供了一种更通用的方式来观察和响应 Vue 实例上的数据变动：**侦听属性**。当你有一些数据需要随着其它数据变动而变动时，你很容易滥用 `watch`——特别是如果你之前使用过 AngularJS。然而，通常更好的做法是使用计算属性而不是命令式的 `watch` 回调。细想一下这个例子：

```
<div id="demo">{{ fullName }}</div>
```

```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
```

上面代码是命令式且重复的。将它与计算属性的版本进行比较：

```
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
```

好得多了，不是吗？

### [计算属性的 setter](https://cn.vuejs.org/v2/guide/computed.html#%E8%AE%A1%E7%AE%97%E5%B1%9E%E6%80%A7%E7%9A%84-setter)

计算属性默认只有 getter ，不过在需要时你也可以提供一个 setter ：

```
// ...
computed: {
  fullName: {
    // getter
    get: function () {
      return this.firstName + ' ' + this.lastName
    },
    // setter
    set: function (newValue) {
      var names = newValue.split(' ')
      this.firstName = names[0]
      this.lastName = names[names.length - 1]
    }
  }
}
// ...
```

现在再运行 `vm.fullName = 'John Doe'` 时，setter 会被调用，`vm.firstName` 和 `vm.lastName` 也会相应地被更新。

---

## Class 与 Style 绑定

# Class 与 Style 绑定

操作元素的 class 列表和内联样式是数据绑定的一个常见需求。因为它们都是属性，所以我们可以用 `v-bind` 处理它们：只需要通过表达式计算出字符串结果即可。不过，字符串拼接麻烦且易错。因此，在将 `v-bind` 用于 `class` 和 `style` 时，Vue.js 做了专门的增强。表达式结果的类型除了字符串之外，还可以是对象或数组。

## [绑定 HTML Class](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A-HTML-Class)

### [对象语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95)

我们可以传给 `v-bind:class` 一个对象，以动态地切换 class：

```
<div v-bind:class="{ active: isActive }"></div>
```

上面的语法表示 `active` 这个 class 存在与否将取决于数据属性 `isActive` 的 [truthiness](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy)。

你可以在对象中传入更多属性来动态切换多个 class。此外，`v-bind:class` 指令也可以与普通的 class 属性共存。当有如下模板:

```
<div
  class="static"
  v-bind:class="{ active: isActive, 'text-danger': hasError }"
></div>
```

和如下 data：

```
data: {
  isActive: true,
  hasError: false
}
```

结果渲染为：

```
<div class="static active"></div>
```

当 `isActive` 或者 `hasError` 变化时，class 列表将相应地更新。例如，如果 `hasError` 的值为 `true`，class 列表将变为 `"static active text-danger"`。

绑定的数据对象不必内联定义在模板里：

```
<div v-bind:class="classObject"></div>
```

```
data: {
  classObject: {
    active: true,
    'text-danger': false
  }
}
```

渲染的结果和上面一样。我们也可以在这里绑定一个返回对象的[计算属性](https://cn.vuejs.org/v2/guide/computed.html)。这是一个常用且强大的模式：

```
<div v-bind:class="classObject"></div>
```

```
data: {
  isActive: true,
  error: null
},
computed: {
  classObject: function () {
    return {
      active: this.isActive && !this.error,
      'text-danger': this.error && this.error.type === 'fatal'
    }
  }
}
```

### [数组语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95)

我们可以把一个数组传给 `v-bind:class`，以应用一个 class 列表：

```
<div v-bind:class="[activeClass, errorClass]"></div>
```

```
data: {
  activeClass: 'active',
  errorClass: 'text-danger'
}
```

渲染为：

```
<div class="active text-danger"></div>
```

如果你也想根据条件切换列表中的 class，可以用三元表达式：

```
<div v-bind:class="[isActive ? activeClass : '', errorClass]"></div>
```

这样写将始终添加 `errorClass`，但是只有在 `isActive` 是 truthy[[1\]](https://cn.vuejs.org/v2/guide/class-and-style.html#footnote-1) 时才添加 `activeClass`。

不过，当有多个条件 class 时这样写有些繁琐。所以在数组语法中也可以使用对象语法：

```
<div v-bind:class="[{ active: isActive }, errorClass]"></div>
```

### [用在组件上](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%94%A8%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A)

> 这个章节假设你已经对 [Vue 组件](https://cn.vuejs.org/v2/guide/components.html)有一定的了解。当然你也可以先跳过这里，稍后再回过头来看。

当在一个自定义组件上使用 `class` 属性时，这些类将被添加到该组件的根元素上面。这个元素上已经存在的类不会被覆盖。

例如，如果你声明了这个组件：

```
Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
```

然后在使用它的时候添加一些 class：

```
<my-component class="baz boo"></my-component>
```

HTML 将被渲染为:

```
<p class="foo bar baz boo">Hi</p>
```

对于带数据绑定 class 也同样适用：

```
<my-component v-bind:class="{ active: isActive }"></my-component>
```

当 `isActive` 为 truthy[[1\]](https://cn.vuejs.org/v2/guide/class-and-style.html#footnote-1) 时，HTML 将被渲染成为：

```
<p class="foo bar active">Hi</p>
```

## [绑定内联样式](https://cn.vuejs.org/v2/guide/class-and-style.html#%E7%BB%91%E5%AE%9A%E5%86%85%E8%81%94%E6%A0%B7%E5%BC%8F)

### [对象语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E5%AF%B9%E8%B1%A1%E8%AF%AD%E6%B3%95-1)

`v-bind:style` 的对象语法十分直观——看着非常像 CSS，但其实是一个 JavaScript 对象。CSS 属性名可以用驼峰式 (camelCase) 或短横线分隔 (kebab-case，记得用单引号括起来) 来命名：

```
<div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px' }"></div>
```

```
data: {
  activeColor: 'red',
  fontSize: 30
}
```

直接绑定到一个样式对象通常更好，这会让模板更清晰：

```
<div v-bind:style="styleObject"></div>
```

```
data: {
  styleObject: {
    color: 'red',
    fontSize: '13px'
  }
}
```

同样的，对象语法常常结合返回对象的计算属性使用。

### [数组语法](https://cn.vuejs.org/v2/guide/class-and-style.html#%E6%95%B0%E7%BB%84%E8%AF%AD%E6%B3%95-1)

`v-bind:style` 的数组语法可以将多个样式对象应用到同一个元素上：

```
<div v-bind:style="[baseStyles, overridingStyles]"></div>
```

### [自动添加前缀](https://cn.vuejs.org/v2/guide/class-and-style.html#%E8%87%AA%E5%8A%A8%E6%B7%BB%E5%8A%A0%E5%89%8D%E7%BC%80)

当 `v-bind:style` 使用需要添加[浏览器引擎前缀](https://developer.mozilla.org/zh-CN/docs/Glossary/Vendor_Prefix)的 CSS 属性时，如 `transform`，Vue.js 会自动侦测并添加相应的前缀。

### [多重值](https://cn.vuejs.org/v2/guide/class-and-style.html#%E5%A4%9A%E9%87%8D%E5%80%BC)

> 2.3.0+

从 2.3.0 起你可以为 `style` 绑定中的属性提供一个包含多个值的数组，常用于提供多个带前缀的值，例如：

```
<div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
```

这样写只会渲染数组中最后一个被浏览器支持的值。在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 `display: flex`。

**译者注**
[1] truthy 不是 `true`，详见 [MDN](https://developer.mozilla.org/zh-CN/docs/Glossary/Truthy) 的解释。

---

## 条件渲染

## [`v-if`](https://cn.vuejs.org/v2/guide/conditional.html#v-if)

`v-if` 指令用于条件性地渲染一块内容。这块内容只会在指令的表达式返回 truthy 值的时候被渲染。

```
<h1 v-if="awesome">Vue is awesome!</h1>
```

也可以用 `v-else` 添加一个“else 块”：

```
<h1 v-if="awesome">Vue is awesome!</h1>
<h1 v-else>Oh no 😢</h1>
```

### `<template>` 元素上使用 v-if 条件渲染分组

因为 `v-if` 是一个指令，所以必须将它添加到一个元素上。但是如果想切换多个元素呢？此时可以把一个 `<template>` 元素当做不可见的包裹元素，并在上面使用 `v-if`。最终的渲染结果将不包含 `<template>` 元素。

```
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

### [`v-else`](https://cn.vuejs.org/v2/guide/conditional.html#v-else)

你可以使用 `v-else` 指令来表示 `v-if` 的“else 块”：

```
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

`v-else` 元素必须紧跟在带 `v-if` 或者 `v-else-if` 的元素的后面，否则它将不会被识别。

### [`v-else-if`](https://cn.vuejs.org/v2/guide/conditional.html#v-else-if)

> 2.1.0 新增

`v-else-if`，顾名思义，充当 `v-if` 的“else-if 块”，可以连续使用：

```
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

类似于 `v-else`，`v-else-if` 也必须紧跟在带 `v-if` 或者 `v-else-if` 的元素之后。

### [用 `key` 管理可复用的元素](https://cn.vuejs.org/v2/guide/conditional.html#%E7%94%A8-key-%E7%AE%A1%E7%90%86%E5%8F%AF%E5%A4%8D%E7%94%A8%E7%9A%84%E5%85%83%E7%B4%A0)

Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。这么做除了使 Vue 变得非常快之外，还有其它一些好处。例如，如果你允许用户在不同的登录方式之间切换：

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address">
</template>
```

那么在上面的代码中切换 `loginType` 将不会清除用户已经输入的内容。因为两个模板使用了相同的元素，`<input>` 不会被替换掉——仅仅是替换了它的 `placeholder`。

自己动手试一试，在输入框中输入一些文本，然后按下切换按钮：

Username 

这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。只需添加一个具有唯一值的 `key` 属性即可：

```
<template v-if="loginType === 'username'">
  <label>Username</label>
  <input placeholder="Enter your username" key="username-input">
</template>
<template v-else>
  <label>Email</label>
  <input placeholder="Enter your email address" key="email-input">
</template>
```

现在，每次切换时，输入框都将被重新渲染。请看：

Username 

注意，`<label>` 元素仍然会被高效地复用，因为它们没有添加 `key` 属性。

## [`v-show`](https://cn.vuejs.org/v2/guide/conditional.html#v-show)

另一个用于根据条件展示元素的选项是 `v-show` 指令。用法大致一样：

```
<h1 v-show="ok">Hello!</h1>
```

不同的是带有 `v-show` 的元素始终会被渲染并保留在 DOM 中。`v-show` 只是简单地切换元素的 CSS 属性 `display`。

注意，`v-show` 不支持 `<template>` 元素，也不支持 `v-else`。

## [`v-if` vs `v-show`](https://cn.vuejs.org/v2/guide/conditional.html#v-if-vs-v-show)

`v-if` 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。

`v-if` 也是**惰性的**：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。

相比之下，`v-show` 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。

一般来说，`v-if` 有更高的切换开销，而 `v-show` 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 `v-show` 较好；如果在运行时条件很少改变，则使用 `v-if` 较好。

## [`v-if` 与 `v-for` 一起使用](https://cn.vuejs.org/v2/guide/conditional.html#v-if-%E4%B8%8E-v-for-%E4%B8%80%E8%B5%B7%E4%BD%BF%E7%94%A8)

**不推荐**同时使用 `v-if` 和 `v-for`。请查阅[风格指南](https://cn.vuejs.org/v2/style-guide/#%E9%81%BF%E5%85%8D-v-if-%E5%92%8C-v-for-%E7%94%A8%E5%9C%A8%E4%B8%80%E8%B5%B7-%E5%BF%85%E8%A6%81)以获取更多信息。

当 `v-if` 与 `v-for` 一起使用时，`v-for` 具有比 `v-if` 更高的优先级。请查阅[列表渲染指南](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if) 以获取详细信息。

---

## 列表渲染

<https://cn.vuejs.org/v2/guide/list.html> 

- v-for
- v-for on a `<template>`
- v-for with v-if
- ...

---

## 事件处理

### 监听事件

<https://cn.vuejs.org/v2/guide/events.html> 

可以用v-on监听DOM事件

```html
<div id="example-1">
  <button v-on:click="counter += 1">Add 1</button>
  <p>The button above has been clicked {{ counter }} times.</p>
</div>
```

```javascript
var example1 = new Vue({
  el: '#example-1',
  data: {
    counter: 0
  }
})
```

### 事件处理方法

``v-on``还可以接受一个需要调用的方法名

```html
<div id="example-2">
    <button v-on:click="greet">Greet</button>
</div>
```

```javascript
var example2 = new Vue({
  el: '#example-2',
  data: {
    name: 'Vue.js'
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet: function (event) {
      // `this` 在方法里指向当前 Vue 实例
      alert('Hello ' + this.name + '!')
      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

// 也可以用 JavaScript 直接调用方法
example2.greet() // => 'Hello Vue.js!'
```



---

## 表单输入绑定

## [基础用法](https://cn.vuejs.org/v2/guide/forms.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

你可以用 `v-model` 指令在表单 `<input>`、`<textarea>` 及 `<select>` 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。尽管有些神奇，但 `v-model` 本质上不过是语法糖。它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。

`v-model` 会忽略所有表单元素的 `value`、`checked`、`selected` 特性的初始值而总是将 Vue 实例的数据作为数据来源。你应该通过 JavaScript 在组件的 `data` 选项中声明初始值。

`v-model` 在内部使用不同的属性为不同的输入元素并抛出不同的事件：

- text 和 textarea 元素使用 `value` 属性和 `input` 事件；
- checkbox 和 radio 使用 `checked` 属性和 `change` 事件；
- select 字段将 `value` 作为 prop 并将 `change` 作为事件。

对于需要使用[输入法](https://zh.wikipedia.org/wiki/%E8%BE%93%E5%85%A5%E6%B3%95) (如中文、日文、韩文等) 的语言，你会发现 `v-model` 不会在输入法组合文字过程中得到更新。如果你也想处理这个过程，请使用 `input` 事件。

### [文本](https://cn.vuejs.org/v2/guide/forms.html#%E6%96%87%E6%9C%AC)

```
<input v-model="message" placeholder="edit me">
<p>Message is: {{ message }}</p>
```

Message is:

### [多行文本](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%9A%E8%A1%8C%E6%96%87%E6%9C%AC)

```
<span>Multiline message is:</span>
<p style="white-space: pre-line;">{{ message }}</p>
<br>
<textarea v-model="message" placeholder="add multiple lines"></textarea>
```

 

在文本区域插值 (`<textarea></textarea>`) 并不会生效，应用 `v-model` 来代替。

### [复选框](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86)

单个复选框，绑定到布尔值：

```
<input type="checkbox" id="checkbox" v-model="checked">
<label for="checkbox">{{ checked }}</label>
```

 false

多个复选框，绑定到同一个数组：

```
<div id='example-3'>
  <input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
  <label for="jack">Jack</label>
  <input type="checkbox" id="john" value="John" v-model="checkedNames">
  <label for="john">John</label>
  <input type="checkbox" id="mike" value="Mike" v-model="checkedNames">
  <label for="mike">Mike</label>
  <br>
  <span>Checked names: {{ checkedNames }}</span>
</div>
```

```
new Vue({
  el: '#example-3',
  data: {
    checkedNames: []
  }
})
```

### [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE)

```
<div id="example-4">
  <input type="radio" id="one" value="One" v-model="picked">
  <label for="one">One</label>
  <br>
  <input type="radio" id="two" value="Two" v-model="picked">
  <label for="two">Two</label>
  <br>
  <span>Picked: {{ picked }}</span>
</div>
```

```
new Vue({
  el: '#example-4',
  data: {
    picked: ''
  }
})
```



### [选择框](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86)

单选时：

```
<div id="example-5">
  <select v-model="selected">
    <option disabled value="">请选择</option>
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <span>Selected: {{ selected }}</span>
</div>
```

```
new Vue({
  el: '...',
  data: {
    selected: ''
  }
})
```

请选择 A B C Selected:

如果 `v-model` 表达式的初始值未能匹配任何选项，`<select>` 元素将被渲染为“未选中”状态。在 iOS 中，这会使用户无法选择第一个选项。因为这样的情况下，iOS 不会触发 change 事件。因此，更推荐像上面这样提供一个值为空的禁用选项。

多选时 (绑定到一个数组)：

```
<div id="example-6">
  <select v-model="selected" multiple style="width: 50px;">
    <option>A</option>
    <option>B</option>
    <option>C</option>
  </select>
  <br>
  <span>Selected: {{ selected }}</span>
</div>
```

```
new Vue({
  el: '#example-6',
  data: {
    selected: []
  }
})
```

用 `v-for` 渲染的动态选项：

```
<select v-model="selected">
  <option v-for="option in options" v-bind:value="option.value">
    {{ option.text }}
  </option>
</select>
<span>Selected: {{ selected }}</span>
```

```
new Vue({
  el: '...',
  data: {
    selected: 'A',
    options: [
      { text: 'One', value: 'A' },
      { text: 'Two', value: 'B' },
      { text: 'Three', value: 'C' }
    ]
  }
})
```

​       One            Two            Three      Selected: A

## [值绑定](https://cn.vuejs.org/v2/guide/forms.html#%E5%80%BC%E7%BB%91%E5%AE%9A)

对于单选按钮，复选框及选择框的选项，`v-model` 绑定的值通常是静态字符串 (对于复选框也可以是布尔值)：

```
<!-- 当选中时，`picked` 为字符串 "a" -->
<input type="radio" v-model="picked" value="a">

<!-- `toggle` 为 true 或 false -->
<input type="checkbox" v-model="toggle">

<!-- 当选中第一个选项时，`selected` 为字符串 "abc" -->
<select v-model="selected">
  <option value="abc">ABC</option>
</select>
```

但是有时我们可能想把值绑定到 Vue 实例的一个动态属性上，这时可以用 `v-bind` 实现，并且这个属性的值可以不是字符串。

### [复选框](https://cn.vuejs.org/v2/guide/forms.html#%E5%A4%8D%E9%80%89%E6%A1%86-1)

```
<input
  type="checkbox"
  v-model="toggle"
  true-value="yes"
  false-value="no"
>
```

```
// 当选中时
vm.toggle === 'yes'
// 当没有选中时
vm.toggle === 'no'
```

这里的 `true-value` 和 `false-value` 特性并不会影响输入控件的 `value` 特性，因为浏览器在提交表单时并不会包含未被选中的复选框。如果要确保表单中这两个值中的一个能够被提交，(比如“yes”或“no”)，请换用单选按钮。

### [单选按钮](https://cn.vuejs.org/v2/guide/forms.html#%E5%8D%95%E9%80%89%E6%8C%89%E9%92%AE-1)

```
<input type="radio" v-model="pick" v-bind:value="a">
```

```
// 当选中时
vm.pick === vm.a
```

### [选择框的选项](https://cn.vuejs.org/v2/guide/forms.html#%E9%80%89%E6%8B%A9%E6%A1%86%E7%9A%84%E9%80%89%E9%A1%B9)

```
<select v-model="selected">
    <!-- 内联对象字面量 -->
  <option v-bind:value="{ number: 123 }">123</option>
</select>
```

```
// 当选中时
typeof vm.selected // => 'object'
vm.selected.number // => 123
```

## [修饰符](https://cn.vuejs.org/v2/guide/forms.html#%E4%BF%AE%E9%A5%B0%E7%AC%A6)

### [`.lazy`](https://cn.vuejs.org/v2/guide/forms.html#lazy)

在默认情况下，`v-model` 在每次 `input` 事件触发后将输入框的值与数据进行同步 (除了[上述](https://cn.vuejs.org/v2/guide/forms.html#vmodel-ime-tip)输入法组合文字时)。你可以添加 `lazy` 修饰符，从而转变为使用 `change`事件进行同步：

```
<!-- 在“change”时而非“input”时更新 -->
<input v-model.lazy="msg" >
```

### [`.number`](https://cn.vuejs.org/v2/guide/forms.html#number)

如果想自动将用户的输入值转为数值类型，可以给 `v-model` 添加 `number` 修饰符：

```
<input v-model.number="age" type="number">
```

这通常很有用，因为即使在 `type="number"` 时，HTML 输入元素的值也总会返回字符串。如果这个值无法被 `parseFloat()` 解析，则会返回原始的值。

### [`.trim`](https://cn.vuejs.org/v2/guide/forms.html#trim)

如果要自动过滤用户输入的首尾空白字符，可以给 `v-model` 添加 `trim` 修饰符：

```
<input v-model.trim="msg">
```

## [在组件上使用 `v-model`](https://cn.vuejs.org/v2/guide/forms.html#%E5%9C%A8%E7%BB%84%E4%BB%B6%E4%B8%8A%E4%BD%BF%E7%94%A8-v-model)

> 如果你还不熟悉 Vue 的组件，可以暂且跳过这里。

HTML 原生的输入元素类型并不总能满足需求。幸好，Vue 的组件系统允许你创建具有完全自定义行为且可复用的输入组件。这些输入组件甚至可以和 `v-model` 一起使用！要了解更多，请参阅组件指南中的[自定义输入组件](https://cn.vuejs.org/v2/guide/components-custom-events.html#%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%84%E4%BB%B6%E7%9A%84-v-model)。

← [事件处理](https://cn.vuejs.org/v2/guide/events.html)