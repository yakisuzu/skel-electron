'use strict';

import ReactDom from 'react-dom';
import {Main} from './renderer/components/main';

ReactDom.render(new Main().render(), document.getElementById('app'));
