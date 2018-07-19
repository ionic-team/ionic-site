const sass = require('@stencil/sass');

exports.config = {
  namespace: 'ionic-site-components',
  plugins: [
    sass()
  ],
  copy: [
    { src: 'node_modules/ionicons/dist/collection/icon/svg/md-search.svg' }
  ],
  outputTargets: [
    {
      type: 'dist',
      dir: 'dist',
      baseUrl: '/stencil',
    },
    {
      type: 'www',
      serviceWorker: false
    }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
