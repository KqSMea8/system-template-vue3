# PC-template-system

> PC-template-system

# 代码规范
- 一个tab代表4个空格
- 行末尾不用分号
- 小驼峰命名（比如：chinesePeople) 必需要语义化，不管名字有多长
- 尽量用ES6语法
- 复杂逻辑代码加注释
- 注释写到每个方法的前面一行
- 多个vue标签属性要换行
- 如果用到vuex，存数据一定要设计好数据结构，而不是每次都仅仅是存个字符串
- 写样式要用class，不要用标签样式，比如 ul li 这种不行
- 手机如何调试
- 跨模块用绝对路径，当前模块用相对路径
- 环境命令
- class命名规则
- 发布从master
- 写函数要细化
- 多用用filter和directives
- 文件目录命名规范
- jquery问题
- 文件目录命名、变量命令（小驼峰）（比如：chinesePeople) 必需要语义化，不管名字有多长
- yarn装包,保证环境一致

## Build Setup

``` bash
# 安装
npm/yarn  install

# 开发环境
npm run d

# 发布到alpha环境
npm run alpha

# 发布到beta环境
npm run beta

```

## 资料
 * [es6语法](http://es6.ruanyifeng.com/)
 * [css3语法](http://www.runoob.com/css3/css3-tutorial.html)
 * [html5语法](http://www.w3school.com.cn/html5/index.asp)
 * [vue官网及教程](https://cn.vuejs.org/)
 * [vue项目模板](https://github.com/vuejs-templates/webpack)
 * [element UI框架](http://element.eleme.io/#/zh-CN/component/installation)
 
 
 ## 按钮或其它权限
 在标签上加上v-auth="'url'" ，如 v-auth="'/system/menu/showMenu'"
 



For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
