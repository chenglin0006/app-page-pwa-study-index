/**
 * @file store index
 * @author chenglin02(chenglin02@dianping.com)
 */

import Vue from 'vue';
import Vuex from 'vuex';
import {createAppShellState} from './modules/app-shell';

Vue.use(Vuex);


export function createStore() {
    return new Vuex.Store({
        modules: {
            appShell: createAppShellState()
        }
    });
}
