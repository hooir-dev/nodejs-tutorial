# 第16章 其他

## Node 面试资源

- [ElemeFE / node-interview](https://github.com/ElemeFE/node-interview)



## nodemon

在开发过程中，每次修改完代码手动重启服务器很麻烦。这里我们可以使用一个第三方命令行工具：[nodemon](https://github.com/remy/nodemon) 来帮我们解决这个问题。

`nodemon` 是一个基于Node.js 开发的一个第三方命令行工具，使用它的第一步就是先安装：

```shell
npm install --global nodemon
```

基本使用：

```shell
nodemon app.js
```

只要是通过 `nodemon app.js` 启动的服务，则它会监视你的文件变化， 当文件发生变化的时候，自动帮你重启服务器。

> 注意：该工具仅用于开发测试，不要在生产服务器中使用该命令。

---

## 使用 nvm 安装管理 Node

安装

- macOS：https://github.com/creationix/nvm
- Linux：https://github.com/creationix/nvm
- Windows：https://github.com/coreybutler/nvm-windows

配置

```bash
nvm node_mirror http://npm.taobao.org/mirrors/node
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

常用命令

```bash
# 查看已安装列表
nvm list

# 安装指定版本
nvm install <version>

# 卸载指定版本
nvm uninstall <version>

# 切换版本
nvm use <version>
```

## JavaScript 代码规范

- [JavaScript Standard Style](https://github.com/standard/standard)
- [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
