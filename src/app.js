'use strict';
import 'babel-polyfill';

import {app, BrowserWindow} from 'electron';

let mainWindow = null;
app.on('window-all-closed', () => {
  app.quit();
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 580,
    height: 365
  });
  mainWindow.loadUrl('file://' + __dirname + '/renderer/index.html');
});
