import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import cart from './cart/';
import user from './user/'
export default new Vuex.Store({
    modules: {
        cart,
        user
    }
});