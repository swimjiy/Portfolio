module.exports = {
  mode: 'spa',
  router: {
    base: '/portfolio/'
  },
  head: {
    title: 'portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Jiyoung Lim&apos;s portfolio' },
      { hid: 'author', name: 'author', content: 'Jiyoung Lim <vivid8222@gmail.com>' },
      { hid: 'og:type', name: 'og:type', content: 'blog' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/portfolio/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    // extend (config, { isDev, isClient }) {
    //   if (isDev && isClient) {
    //     config.module.rules.push({
    //       enforce: 'pre',
    //       test: /\.(js|vue)$/,
    //       loader: 'eslint-loader',
    //       exclude: /(node_modules)/
    //     })
    //   }
    // },
    // extend(webpackConfig, { isDev, isClient }) {
    //   webpackConfig.resolve.alias.dom7$ = 'dom7/dist/dom7.js'
    //   webpackConfig.resolve.alias.swiper$ = 'swiper/dist/js/swiper.js'
    // },
    loaders:[
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'url-loader',
        exclude: /assets/
      }
    ],
    // vendor : [ 
    //   'vue-awesome-swiper' 
    // ]
  },
  plugins: [
    { src: '~plugins/swiper.js', ssr: false }
  ],
  css: [
    'swiper/dist/css/swiper.css',
    { src: '~assets/scss/app.scss', lang: 'scss' }
  ],
}

