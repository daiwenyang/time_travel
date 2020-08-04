### 问题描述：
#### 在svg的 image元素href赋值采用的是require(image.png)的形式。如果image点击，则更换image的url,但是发现，如果图片大于10k时，图片加载不出来。
### 问题分析：
#### 经过定位后发现，小于10k的图片返回的是base64值，大于10k返回的是图片经过编译后的路径，但是编译后的路径带有hash值等，在image中href值会发生变化。导致图片加载不出；

### 解决方案：
#### 1、图片名称不变，改变vue.config.js:filenameHashing:false
#### 2、改变url-loader配置，limit值设置大点（推荐）：
    
    // chainWebpack: config => {
    //     config.module
    //       .rule('images')
    //       .use('url-loader')
    //         .loader('url-loader')
    //         .tap(options => {
    //             options.limit= 1024 * 100;
    //           return options
    //         })
    //   },
### 3、采用ajax等加载图片资源，然后url.createURLObject等；

    
