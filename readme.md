babel7正式版已经发布。
官方包增加了@标识  
核心的有
"@babel/core"
"@babel/preset-env"

stage 已被废除



配置一：
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        },
        "useBuiltIns":"usage",
        "modules": false,
        "debug": true
      }
    ]
  ],
  "plugins": [
    ["transform-vue-jsx"],
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}



 设置"useBuiltIns":"usage"   依赖@babel/polyfill 不需要显示import

 会根据代码中用到的新语法按需 添加polyfill     

 适合开发网页 应用等

配置二：
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "browsers": ["> 1%", "last 2 versions", "not ie <= 8"]
        },
        "modules": false,
        "debug": true
      }
    ]
  ],
  "plugins": [
    ["transform-vue-jsx"],
    ["@babel/plugin-transform-runtime"],
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}

@babel/plugin-transform-runtime
实例方法无法转换  不会污染全局   适合开发库 工具包