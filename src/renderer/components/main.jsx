'use strict';

import React from 'react';
import {shell} from 'electron';

export class Main extends React.Component{
  state = {
    message: 'Hello, Electron'
  };
  constructor(){
    super();
  }
  openGithub(){
    shell.openExternal('https://github.com/yakisuzu/skel-electron');
  }
  render(){
    return(
      <div className="container">
        <div className="jumbotron main">
          <h1>{this.state.message}</h1>
          <p>Provided by <a href="#" onClick={this.openGithub}>skel-electron<span className="glyphicon glyphicon-heart"></span></a></p>
        </div>
      </div>
    );
  }
}
