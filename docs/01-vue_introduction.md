# 第1章 Vue.js 介绍

## 疯狂发展的前端技术

- 前端交互越来越多，功能需求越来越复杂
- 旧浏览器逐渐淘汰，移动端需求增加
- 架构由传统的后台 MVC 向 REST API + MV* 发展
  + 以前：胖服务器，瘦客户端
  + 现在：胖客户端，瘦服务器
- 三大框架诞生
  + Angular
  + React
  + Vue

## Vue是什么

以下引自官网原话：

> Vue.js (读音 /vjuː/，类似于 view) 是一套构建用户界面的渐进式框架。
> 与其他重量级框架不同的是，Vue 采用自底向上增量开发的设计。
> Vue 的核心库只关注视图层，它不仅易于上手，还便于与第三方库或既有项目整合。
> 另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，Vue 也完全能够为复杂的单页应用程序提供驱动。

- 一款非常优秀的前端渐进式 JavaScript 框架
  + Vue 本身只是一个用于数据驱动视图更新的库
  + 随着生态的慢慢发展，如今已经有了 Vue Router、Vuex、Vue CLI、Vue Server Renderer 等功能库，所以当 Vue 和这些核心功能库结合到一起的时候，我们称之为一个框架
  + 这些技术一般也称之为 Vue 全家桶，所以学习 Vue 实际上就是要学习 Vue 全家桶才能发挥出 Vue 的威力
- 由尤雨溪开发并于2014年2月开源于 Github
  + 目前已收货了 10w+ :star:
- 可以轻松构建 **SPA 应用程序**
- 通过 **指令** 扩展了 HTML，通过 **表达式** 绑定数据到 HTML
- 通过组件化开发极大的提高了开发的效率和可维护性
- **最大程度上解放了 DOM 操作**
- **它能让你更加的享受编程的乐趣**

---

## 发展历史

> [Github 发布记录](https://github.com/vuejs/vue/releases)

- Vue.js 由尤雨溪个人正式发布于2014年2月，并开源于 Github
- 2015年10月27日，正式发布 `1.0`
- 2016年8月1 日，正式发布 `2.0`
- 截止到 2018-3-30 目前最新版本为 `2.5.16`
- 目前已在 Github 收获 80k+ Star

---

## Vue 核心思想

Vue 是为了克服 HTML 在构建应用上的不足而设计的。Vue 有着诸多特性，最为核心的是：

- **数据驱动**
  + DOM 是数据的一种自然映射
  + 数据改变自动驱动视图更新
- **组件化**
  + 扩展 HTML 元素，封装可重用代码

![mvvm](./assets/mvvm.png)

![components.png](./assets/components.png)



## 相关链接

- [Vue Github仓库](https://github.com/vuejs/vue)
- [Vue 中文官网](https://cn.vuejs.org/)
- [Vue 官方教程](https://cn.vuejs.org/v2/guide/)
- [Vue 官方 API 参考文档](https://cn.vuejs.org/v2/api/)
- [Vue 官方示例](https://cn.vuejs.org/v2/examples/)
- [awesome-vue](https://github.com/vuejs/awesome-vue)
- [我们为什么要用vue，他解决了什么问题，如何使用它？](https://blog.csdn.net/wxl1555/article/details/79964818 )
- [VUE（现代框架） VS jquery（传统库）](https://zhuanlan.zhihu.com/p/20197803 )

---

## 查看离线文档

- [官方文档 Github 仓库](https://github.com/vuejs/cn.vuejs.org)

---

## 关于作者

![尤雨溪](./assets/006tNc79ly1fmgrsgfs25j30h40cdgng.jpg)

- [尤雨溪 - 知乎](https://www.zhihu.com/people/evanyou/answers)
- [Vue作者尤雨溪：以匠人的态度不断打磨完善Vue （图灵访谈）](http://www.ituring.com.cn/article/273032)
- [尤雨溪 - 新浪微博](https://weibo.com/arttechdesign)
- [比较详细的采访 Vue 作者尤雨溪](https://www.zcfy.cc/article/an-interview-with-vue-js-creator-evan-you)
- [作者 github](https://github.com/yyx990803)
- [尤雨溪谈Vue.js ：缔造自由与真我](https://gitee.com/gitee-stars/14)

