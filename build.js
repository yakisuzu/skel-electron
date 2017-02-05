'use strict';

const ep = require("electron-packager");
const packageJson = require("./package.json");

//    "pkg-mac": "electron-packager ./app \"electron app\" --platform=darwin --arch=x64",
//    "pkg-win32": "electron-packager ./app \"electron app\" --platform=win32 --arch=all"

ep({
  name: packageJson["name"],
  dir: "./app",// source
  out: "./build",
  //icon: "./app/icon.ico",
  platform: "darwin",
  arch: "x64",
  version: "1.4.14",// Electron version
  overwrite: true,
  asar: false,
  "app-version": packageJson["version"],// app version
  "app-copyright": "Copyright (C) " + new Date().getFullYear() + " " + packageJson["author"] + ".",
  "version-string": {// for Windows
    CompanyName: "",
    FileDescription: packageJson["name"],
    OriginalFilename: packageJson["name"] + ".exe",
    ProductName: packageJson["name"],
    InternalName: packageJson["name"]
  }

}, function(err, appPaths){
  if(err){
    console.log(err);
  }
  console.log("Done: " + appPaths);
});
