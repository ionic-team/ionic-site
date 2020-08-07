const { sass } = require('@stencil/sass');
const nodePolyfills = require('rollup-plugin-node-polyfills');

exports.config = {
  namespace: 'ionic-site-components',
  plugins: [
    sass()
  ],
  rollupPlugins: {
    after: [
      nodePolyfills()
    ]
  },
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
