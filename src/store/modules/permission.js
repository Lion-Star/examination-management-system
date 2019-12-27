import { asyncRoutes, constantRoutes, authorityRoutes } from '@/router'


const state = {
    routes: [],
    addRoutes: []
}

const mutations = {
    SET_ROUTES: (state, routes) => {
        state.addRoutes = routes
        state.routes = constantRoutes.concat(routes)
    }
}

const actions = {
    async generateRoutes({ commit }, viewAuthority) {
        console.log(viewAuthority);

        let accessedRoutes = [];
        //遍历需要权限展示的路由
        authorityRoutes.forEach(item => {
            let children = [],
                unAuthorized = [];
            item.children.forEach(val => {
                //如果权限id对的上
                console.log(val);

                if (viewAuthority.findIndex(view => view.view_id === val.meta.view_id) !== -1) {
                    children.push(val)
                } else {
                    unAuthorized.push(val)
                }
            });
            // 把拥有的路由重置children
            item.children = children
            accessedRoutes.push(item);

            //把不匹配的路由重定向到401
            unAuthorized.forEach(value => {
                accessedRoutes.push({
                    redirect: '/401'
                })
            })
        })
        commit('SET_ROUTES', accessedRoutes);

        return accessedRoutes;
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}