# vue project build



## 项目架构

1. 跨域问题

   CORS跨域：后端进行更改

   jsonp跨域：前端适配，后端配合 前端使用jsonp插件 ，是一段js脚本不是 xhr请求

   代理跨域：接口代理--通过修改nginx服务器配置实现 【前端修改 后端不动】

   ​					通过nodejs设置代理跨域

   设置代理跨域: vue.config.js

   ```bash
   module.exports = {
     devServer:{
       host:'localhost',
       port:8080,
       proxy:{
         '/api':{
           target:'http://www.imooc.com',
           changeOrigin:false,
           pathRewrite:{
             '/api':'/api'
           }
         }
       }
     }
   }
   ```

   




## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
