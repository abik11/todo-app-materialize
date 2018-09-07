# Todo App
Just a very simple example of Webpack (Webpack + Vue.js + Pug + SASS + Materialize) with unit testing (mocha + chai + avoriaz + jsdom). May serve as nice starting point for something bigger.

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
npm i -D materialize-css materialize-loader #if you prefer materialize
npm i -D bootstrap-loader bootstrap-sass    #if you prefer bootstrap
npm i -D url-loader resolve-url-loader animate.css
npm i -D purifycss-webpack purify-css glob-all
npm i -D mocha chai         #Testing framework / Assertion library
npm i -D mocha-webpack      #Plugin for Webpack to run Mocha
npm i -D avoriaz            #Wraper for Vue components for testing
npm i -D jsdom jsdom-global #Mocks browser for avoriaz
npm i -D null-loader        #Useful for testing, to ignore css etc.
```

2. Run tests<br />
`npm test`

3. Run in development mode<br />
`npm run dev`

4. Run for production<br />
`npm run build`