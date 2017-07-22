/**
 * @file entry
 * @author chenglin02(chenglin02@dianping.com)
 */

import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router.js';

if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        var version = '1.0.1';
        navigator.serviceWorker.register('./sw.js').then(function (reg) {
            if (localStorage.getItem('sw_version') !== version) {
                reg.update().then(function () {
                    localStorage.setItem('sw_version', version)
                });
            }
        });
    })
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp() {
    let router = createRouter();
    let app = new Vue({
        router,
        ...App
    });
    return {app, router};
}
