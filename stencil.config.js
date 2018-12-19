const { sass } = require('@stencil/sass');

exports.config = {
  namespace: 'ionic-site-components',
  plugins: [
    sass()
  ],
  copy: [
    { src: '../../node_modules/ionicons/dist/collection/icon/svg' }
  ],
  outputTargets: [
    {
      type: 'dist',
      dir: 'content/js/stencil',
    },
  ],
  srcDir: 'assets/stencil'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
