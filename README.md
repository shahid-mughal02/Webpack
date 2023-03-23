## Reference
https://webpack.js.org/guides/getting-started/

## Install Webpack
```
npm i -D webpack webpack-cli
```
-D -> devDependencies


## Generate uuid number (For Testing)
```
npm i uuid
```
###remove uuid
```
npm remove uuid
```

## After defining mode in config
[x] "build": "webpack --mode production"
- Replaced
[x] "build": "webpack

## Installing Loaders
```
npm i -D sass style-loader css-loader sass-loader
```

## HTMLWebpackPlugin 
-> install this if you don't want to edit the dist/index.html file
npm i -D html-webpack-plugin

## Caching
https://webpack.js.org/guides/caching/

## Help to debug the code as sometime you have any error in source code but doesn't show code to you
```
devtool: 'source-map',
```

## Babel -> for backward compatibility
```
npm i -D babel-loader @babel/core @babel/preset-env
```

## Load Images
```
output: {
    assetModuleFilename: '[name][ext]'  // asset loading
}
rules: {
        test: /\.(png|svg|gif|jpeg|jpg)$/i,
        type: "asset/resource"
    }
```

## install axios for joke api
```
npm i -D axios
```

## Bundle analyzer
### Provide visual Reperesentation of application
```
npm i -D webpack-bundle-analyzer
```
