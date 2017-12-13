module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'Brain cloud',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: 'Quarters game'}
    ],
    link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}],
    script: [
      {type: 'text/javascript', src: '/quarters.min.js'},
      {
        type: 'text/javascript',
        src: 'https://code.jquery.com/jquery-3.2.1.min.js'
      },
      {type: 'text/javascript', src: '/brainCloudClient.min.js'}
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: {color: '#3B8070'},

  /*
  ** Global CSS
  */
  css: [{src: '~assets/css/main.scss', lang: 'scss'}],

  /**
   * SSR
   */
  render: {
    ssr: false
  },

  /*
  ** router config
  */
  router: {
    middleware: ['auth-init']
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
