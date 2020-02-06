const { sass } = require('@stencil/sass');

exports.config = {
  namespace: 'ionic-site-components',
  plugins: [
    sass()
  ],
  outputTargets: [
    // {
    //   type: 'dist',
    //   dir: '_site/js/stencil',
    // },
    {
      type: 'dist',
      dir: 'dist/js/stencil',
      copy: [
        { 
          src: '../../node_modules/ionicons/dist/svg',
          dest: '../svg'
        }
      ],
    },
  ],
  srcDir: 'assets/stencil'
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};
