# Responsive-Layout-Vue-Css

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Notes:
I did not know VueJS prior to a week ago.  With more practice I am sure that I could simplify the code using more advanced VueJS.  Is working to most specifications. Most of app is static and not dynamic.  Used bulma for simplicity but I think it might be better to use bootstrap or bourbon.  No tests are written.

### Todo:
- Implement vue-router and axios for routing and http calls
- Refactor commonly called functions and common css to global.
- Use sass instead of straight css.  Webpack would not recognize sass and in interest of time built in css for now.
- Use MomentJS to implement "now, moments ago..etc" labels for dates
- Get rid of CDN's and use webpack to minify and chunk.
- Write tests so future changes won't break front-end.



#### Built Using:
- vue-cli webpack template
- bulma CSS [link] (http://bulma.io/)
- font-awesome [link] (http://fontawesome.io/)
- normalize.css [link] (https://necolas.github.io/normalize.css/)
- moment.js [link] (https://momentjs.com/docs/)


For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/).
