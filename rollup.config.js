import babel from 'rollup-plugin-babel';

export default {
  input: 'index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  external: [
    'leaflet.fullscreen',
    'prop-types',
    'react-leaflet',
  ],
  plugins: [
    babel({
      exclude: 'node_modules/**',
      presets: [
        [
          "@babel/env",
          {
            targets: "> 0.25%, not dead"
          }
        ]
      ]

    })
  ]
};
