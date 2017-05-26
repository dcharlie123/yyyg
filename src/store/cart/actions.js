import * as types from './mutations-types.js';
export default {
    //check_db,检查商品
    check_db: ({
        commit
    }, obj) => {
        commit(types.CHECK_DB, obj);
    },
    //create_db，讲商品添加进购物车中
    create_db: ({
        commit
    }, {
        goodsItem
    }) => {
        commit(types.CREATE_DB, goodsItem);
        commit(types.UPDATE_LOCAL);
    },
    //add_db，对购物车中的商品进行 “+”
    add_db: ({
        commit
    }, i) => {
        commit(types.ADD_DB, i);
        commit(types.UPDATE_LOCAL);
    },
    //update_local,更新本地缓存
    update_local: ({
        commit
    }) => {
        commit(types.UPDATE_LOCAL);
    },
    //update_cur_shop_status
    update_cur_shop_status: ({
        commit
    }, obj) => {
        commit(types.UPDATE_CUR_SHOP_STATUS, obj);
    },
    //reduce_db，对购物车中的商品进行 “-”
    reduce_db: ({
        commit
    }, i) => {
        commit(types.REDUCE_DB, i);
        commit(types.UPDATE_LOCAL);
    },
    //delete_db，对购物车中的商品进行删除
    delete_db: ({
        commit
    }) => {
        commit(types.DELETE_DB);
        commit(types.UPDATE_LOCAL);
    },
    clear_local: ({
        commit
    }) => {
        commit(types.CLEAR_LOCAL);
    },
};