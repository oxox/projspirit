ProjSpirit!
===========

![ProjSpirit!](https://raw.github.com/oxox/projspirit/master/src/img/icon.png)

## 背景

ProjSpirit是使用[node-webkit](https://github.com/rogerwang/node-webkit)开发的一个前端静态文件管理工具。功能大体上和cssgaga类似但要简单很多，重造这个轮子，除了想玩玩node-webkit之外，更直接的缘由是鄙人所在部门的svn目录结构很是变态凌乱（历史遗留问题，据说是运维缓存策略所需），cssgaga类的工具不适用。

怎么变态法？

一般的前端文件组织方式为：项目目录，里面是css、img、js等类型子目录。

	|-----------------|--- css
	|-- project_xxx --|--- img
	|-----------------|--- js


而我们部门的前端文件组织方式为：类型目录，里面是项目子目录。

	|-- css --|--- project_xxx
	|-- img --|--- project_xxx
	|-- js  --|--- project_xxx

尼玛的，这意味着一个项目的文件被分散在N个不同的父级目录里面。

ProjSpirit同时支持上面两种类型的文件组织形式。对于第二种情况，它会自动找到项目相关的文件，并放到一起来展示，方便你做上传、编辑等操作。


## 功能

- [x] ftp上传
- [x] tortoiseSVN调用
- [x] css合并压缩
- [x] js压缩
- [ ] png无损压缩
- [ ] jpg无损压缩
- [ ] host功能-集成[hostspirit](http://faso.me/hostspirit/)
- [ ] sprite雪碧图生成

## 下载地址

[敲击这里下载](http://mamboer.github.com/nwapp/release/ProjSpirit.zip)

## 如何使用

### 配置工作台

ProjSpirit沿用了Aptana工作台的概念，可以认为一个工作台对应一个大项目，对应一个远程的ftp服务器（开发机）。

工作台的配置界面如下：

![ProjSpirit!](http://oxox.io/projspirit/assets/img/ws.jpg)

### 拖拽项目目录进入ProjSpirit

![ProjSpirit!](http://oxox.io/projspirit/assets/img/proj.jpg)

注：请尽量拖最小的工作目录进来！！如果你的项目文件巨多，有可能会卡死！
