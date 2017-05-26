import * as types from './mutations-types.js';
export default {
    //检查是否已经存在购物车列表中
    [types.CHECK_DB](state, {
        id
    }) {
        state.curIndex = -1;
        let list = state.cartList;
        if (list.length) {
            console.log('have')
            for (let i = 0; i < list.length; i++) {
                if (list[i].goods_id == id) {
                    state.curIndex = i;
                }
            }
        }
    },
    [types.CREATE_DB](state,goodsItem){
        state.cartList.push(goodsItem);
    },
    [types.ADD_DB](state,i=1){
        state.cartList[state.curIndex].count=parseInt(state.cartList[state.curIndex].count);
        state.cartList[state.curIndex].count+=i
    },
    [types.UPDATE_LOCAL](state) {
        localStorage.setItem('cart', JSON.stringify(state.cartList));
    },
    [types.UPDATE_CUR_SHOP_STATUS](state, {
        index = -1
    }) {
        state.curIndex = index;
    },
    [types.REDUCE_DB](state) {
        state.cartList[state.curIndex].count = parseInt(state.cartList[state.curIndex].count);
        state.cartList[state.curIndex].count--;

        if (state.cartList[state.curIndex].count == 0) {
            // state.cartList.splice(state.curIndex, 1);
            state.cartList[state.curIndex].count=1;
        }
    },
    [types.DELETE_DB](state) {
        if (state.curIndex >= 0) {
            state.cartList[state.curIndex].count = 0;
            state.cartList.splice(state.curIndex, 1);
        }
    },
    [types.CLEAR_LOCAL](state) {
        state.cartList.forEach(function(item) {
            item.count = 0;
        });
         state.cartList.splice(0);
        state.cartList = [];
        localStorage.removeItem('cart');
    }
};