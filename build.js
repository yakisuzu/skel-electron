'use strict';

const ep = require('electron-packager');
const packageJson = require('./package.json');

//--platform=darwin --arch=x64',
//--platform=win32 --arch=all'

ep({
  name: packageJson['name'],
  dir: './app',// source
  out: './build',
  //icon: './app/icon.ico',
  platform: 'darwin',
  arch: 'x64',
  electronVersion: packageJson['devDependencies']['electron'],
  overwrite: true,
  asar: false,
  'app-version': packageJson['version'],// app version
  'app-copyright': 'Copyright (C) ' + new Date().getFullYear() + ' ' + packageJson['author'] + '.',
  'version-string': {// for Windows
    CompanyName: '',
    FileDescription: packageJson['name'],
    OriginalFilename: packageJson['name'] + '.exe',
    ProductName: packageJson['name'],
    InternalName: packageJson['name']
  }

}, function(err, appPaths){
  if(err){
    console.log(err);
  }
  console.log('Done: ' + appPaths);
});
