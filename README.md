# Todo App
Just a very simple example of Webpack + Vue.js + Pug + SASS + Materialize with a little bit of axios and lodash. May serve as nice starting point for something bigger.

# Build 

1. Install dependencies<br />
```bash
npm i -g n 
npm i -g npm
npm i -g rimraf                 #Easily deleting nodejs libraries
npm i -D clean-webpack-plugin   #Deletes /dist before build (uses rimraf)
npm i vue vue-router vue-i18n jquery lodash axios
npm i -D webpack webpack-dev-server webpack-notifier
npm i -D cross-env 
npm i -D vue-loader vue-template-compiler 
npm i -D pug pug-html-loader
npm i -D css-loader sass-loader node-sass extract-text-webpack-plugin
npm i -D html-loader html-webpack-plugin file-loader
npm i -D babel-core babel-loader babel-preset-es2015 babel-preset-stage-2
npm i -D materialize-css materialize-loader
npm i -D url-loader resolve-url-loader animate.css
npm i -D purifycss-webpack purify-css glob-all
```

2. Run in development mode<br />
`npm run dev`

3. Run for production<br />
`npm run build`