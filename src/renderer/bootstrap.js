'use strict';

import ReactDom from 'react-dom';
import {Main} from './components/main';

ReactDom.render(new Main().render(), document.getElementById('app'));
