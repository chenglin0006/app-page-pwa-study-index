/**
 * @file client entry
 * @author chenglin02(chenglin02@dianping.com)
 */

import 'babel-polyfill';
import FastClick from 'fastclick';
import {createApp} from './app';

FastClick.attach(document.body);

let {app, router} = createApp();

router.onReady(() => app.$mount('#app'));
