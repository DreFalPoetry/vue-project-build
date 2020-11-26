module.exports = {
  devServer:{
    host:'localhost',
    port:8080,
    hot:true,
    open:true,
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