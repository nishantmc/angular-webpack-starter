# angular-webpack-starter
A starter for angular + webpack


* The package.json dependencies are copied from generated angular project (ng new my-app)

* devDependencies

@types/node - type definitions for node
typescript - copied from generated angular prj (ng new my-app)


* The src files are mostly copied from ng new prj
* pollyfills.ts 
Had to add below lines to make angular compile work without errors

import 'core-js/es7/reflect';

* webpack
in webpack.common/webpack.test for scss loaders had to use 'to-string-loader'