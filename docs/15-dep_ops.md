# 第15章 部署与运维

- [项目上线流程](https://www.imooc.com/learn/1004)
- [Node.js线上服务器部署与发布](https://coding.imooc.com/class/95.html)

## 构成

## 硬件

首先，一个前端工程要变成一个能访问的服务或者网页，必须要跑在宿主机器上。我们需要寻找一个线上机器来当宿主机器，所幸国内提供云服务器ECS的大厂有很多，BAT、亚马逊提供的产品本质上没有很大的差别，我们根据自己的喜好进行选择即可。本文中，作者使用的是阿里云的主机，1核、2GB、1Mbps、Ubuntu 16.04 64位的机器。

## 软件

硬件申请好了之后，我们来聊聊最少需要安装哪些软件就能将服务跑起来。我们需要的软件有：nginx、nodejs、PM2、git。

nginx：作为http服务器接受来自internet的请求，并将请求按配置规则转发给对应的端口。

nodejs：在云主机上提供js的运行环境

PM2：node应用的进程管理器

git：将git仓库的代码远程拉取到云主机上

## 安装

（因为本文使用的线上机器系统是Ubuntu，故软件安装使用的是apt-get。若各位读者的机器是centOS，同义替换成yum即可）

1、安装nvm

- 首先安装必要的包

sudo apt-get update

sudo apt-get install build-essential libssl-dev

- 然后使用wget安装nvm

wget -qO- [https://raw.githubusercontent.com/creationix/nvm/v0.31.4/install.sh](https://link.juejin.im?target=http%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttps%253A%2F%2Fraw.githubusercontent.com%2Fcreationix%2Fnvm%2Fv0.31.4%2Finstall.sh) | bash

2、安装git

sudo apt-get install git

3、使用nvm安装node

nvm install stable （安装最新的稳定版本）或

nvm install 4.2.2 （安装具体的版本号）

4、使用npm安装PM2

npm install -g pm2

5、手动安装nginx

- 首先安装nginx依赖 pcre、openssl、zlib

sudo apt-get install openssl libssl-dev

sudo apt-get install libpcre3 libpcre3-dev

sudo apt-get install zlib1g-dev

- 然后手动安装nginx

wget [http://nginx.org/download/nginx-1.12.2.tar.gz](https://link.juejin.im?target=http%3A%2F%2Flink.zhihu.com%2F%3Ftarget%3Dhttp%253A%2F%2Fnginx.org%2Fdownload%2Fnginx-1.10.3.tar.gz)

tar zxvf nginx-1.12.2.tar.gz

./configure --prefix=/server/runtime/nginx/1.12.2 （prefix参数是自己设置的安装目标路径）

make && make install

## 目录设置

细心的读者会感到好奇，我的nginx为什么不用apt-get直接安装，而是要自己动手安装呢？

如果我使用apt-get来进行nginx安装，会自动将软件安装到usr目录下，后续版本的安装会覆盖之前的版本。如果我有在一台服务器上安装多个nginx版本的需求，如：Mainline version 和 Stable version，就需要手动安装来对nginx的版本进行物理划分。

我的目录划分为：

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dcaf187ca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如图所示，在 / (根目录)下新建server目录，然后在server目录下新建app、compile、daemon和runtime四个文件夹。

1、app

app目录下存放开发工程的代码，通过git clone将git仓库的代码pull下来。当服务出现问题时，可以人工登录云主机，在app目录下通过手动的方式重启服务。

2、compile

compile目录下存放下载的tar包以及从tar包解压出来的文件。如果下载的软件多了，为了便于管理，可以按软件分文件夹存放。

3、runtime

runtime目录是软件安装的目标路径，compile目录下的nginx安装包通过configure指令安装到runtime目录下。runtime内部目录结构如图：

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dc7f2e4b2?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如图所示，为了便于管理，runtime目录下根据软件分文件夹(nginx)，再根据版本分文件夹(1.12.2)。

4、daemon

daemon被称为守护进程，daemon目录下存放的是会一直运行的服务，如nginx。daemon内部目录结构如图：

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dc6f3746d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

如图，nginx目录下先根据版本（1.12.2）进行划分，后根据端口（80）进行划分。在多版本nginx、多端口并存的场景下，如果我要快速定位nginx的问题，这种划分会给运维带来极大的便利。需要寻找对应版本和对应端口时，只要寻找文件目录即可。

conf文件夹的内容是从nginx安装目录下的conf文件夹整个复制过来的，我们自己业务需要的设置就直接修改conf文件夹内的配置文件即可。如此配置的好处在于将自己的配置与nginx预设配置分离，根本不用担心把nginx玩坏了：）

log文件夹内存放nginx的运行日志，以文件的方式进行存储。

除此之外，在80文件夹下还有两个自己写的脚本文件：up、down。up脚本的作用是对nginx进行拉起，down脚本的作用在于将现运行的nginx kill。这里将拉起操作和kill操作写成脚本，便于运维人员快速、准确的对nginx进行操作。

如此进行server文件夹的目录设置，将服务所需软件与机器的通用软件进行了分离，不仅便于云主机的日常维护，同时当需要整个删除服务的时候，直接删除server文件夹即可简单清除。

## 步骤

1、阿里云机器申请好后，在机器上建立一个账号，便于之后用ssh的方式登录。

2、linux机器的提示符个人觉得不好用，可以选用apt-get安装zsh和oh-my-zsh来提升shell的便利性（逼格）。

3、在 / (根目录)下新建server目录，在server目录下新建app、compile、daemon、runtime四个文件夹。

4、用apt-get安装nvm、git；用nvm安装nodejs；用npm安装PM2；用手动方式安装nginx。

5、在daemon目录下新建conf和log文件夹，log存放日志文件，conf里面的内容是从nginx原生复制过来的，根据业务需要修改里面的nginx.conf文件。

6、阿里云主机默认是不开端口的，需要自己在console控制台中开启对应端口(80)。

7、在app文件夹下使用git clone拉代码，并使用PM2指令启动服务。

8、在daemon文件夹下写nginx配置文件，并启动nginx处理http请求。

## 代码

1、PM2的配置文件代码

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dcc8d76cf?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

2、up脚本代码

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dc71bf00f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

3、down脚本代码

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863dcb0ee73f?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

4、nginx配置文件代码

![img](https://user-gold-cdn.xitu.io/2017/11/20/15fd863df6feaee3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

## 总结

粗略的讲述了前端线上机器运维与部署的基础知识。本文采用了手动部署的方式，是为了让读者更清楚的知道前端部署的细节。

后续还有很多优化的事情可以做，比如如果node层会访问数据库(MongoDB)，那么推荐加入MemCache缓存；为了提高部署的快捷性，可以写一个部署脚本，一次性将全部部署操作都使用脚本进行等等。

 

 

 

 

