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
        },
        {
          src: '../../node_modules/emoji-datasource-twitter/emoji.json',
          dest: '../emoji.json'
        },
        {
          src: '../../node_modules/emoji-datasource-twitter/img/twitter/sheets-256/64.png',
          dest: '../emoji-sheet-twitter-256-64.png'
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
