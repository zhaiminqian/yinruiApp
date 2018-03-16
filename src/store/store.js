import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        // 角色类型
        roleType:"",
        // 当前那一页
        pageIndex:1
    },
    mutations:{
        getRoleType(state,payload){
            state.roleType = payload;
        },
        changePageIndex(state,payload){
            state.pageIndex = payload;
        }
    }
})