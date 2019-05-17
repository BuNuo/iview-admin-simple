<p align="center">
    <a href="https://www.iviewui.com">
        <img width="200" src="https://file.iviewui.com/logo-new.svg">
    </a>
</p>

# iView Admin

## Install
```bush
// install dependencies
npm install
```
## Run
### Development
```bush
npm run dev
```
### Production(Build)
```bush
npm run build
```

## 简介
&emsp;&emsp;iView admin是基于Vue.js，搭配使用[iView](https://www.iviewui.com) UI组件库形成的一套后台集成解决方案，由TalkingData前端可视化团队部分成员开发维护。iView admin遵守iView设计和开发约定，风格统一，设计考究，并且更多功能在不停开发中。
如果您想查看iview-admin的更新动态，您可以到[更新日志](https://github.com/iview/iview-admin/releases)查看了解最新更新；如果您是新手，想快速入手iview-admin，您可以到[使用教程](https://github.com/iview/iview-admin/wiki)查看讲解；如果您想在线体验iview-admin，您可以到[在线访问](https://admin.iviewui.com/)体验。如果你只是想要一个清醒爽朗的界面，那你可以下载[简化版模板](https://github.com/iview/iview-admin/tree/template)来做开发。


## 文件结构
```shell
.
├── build  项目构建配置
├── config  开发相关配置
├── public  打包所需静态资源
└── src
    ├── api  AJAX请求
    └── assets  项目静态资源
        ├── icons  自定义图标资源
        └── images  图片资源
    ├── components  业务组件
    ├── config  项目运行配置
    ├── directive  自定义指令
    ├── libs  封装工具函数
    ├── locale  多语言文件
    ├── mock  mock模拟数据
    ├── router  路由配置
    ├── store  Vuex配置
    ├── view  页面文件
    └── tests  测试相关
```
## 效果展示

### 登录页面
![Image text](https://github.com/BuNuo/iview-admin-simple/blob/master/src/assets/images/show-login.png)

### 主页面
![Image text](https://github.com/BuNuo/iview-admin-simple/blob/master/src/assets/images/show-main.png)

## License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2016-present, iView
