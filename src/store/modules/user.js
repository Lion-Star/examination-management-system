import { login, logout, getInfo, getViewAuthority } from '@/api/user'
import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'

const state = {
    token: getToken(),
    name: '',
    avatar: '',
    introduction: '',
    roles: [],
    viewAuthority: []
}

const mutations = {
    SET_TOKEN: (state, token) => {
        state.token = token
    },
    SET_INTRODUCTION: (state, introduction) => {
        state.introduction = introduction
    },
    SET_NAME: (state, name) => {
        state.name = name
    },
    SET_AVATAR: (state, avatar) => {
        state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
        state.roles = roles
    },
    SET_VIEWAUTHORITY: (state, viewAuthority) => {
        state.viewAuthority = viewAuthority;
    },
    SET_USERID(state, id) {
        state.userid = id
    }
}

const actions = {
    // user login
    async login({ commit }, userInfo) {
        const { username, password } = userInfo
        const res = await login({ user_name: username, user_pwd: password })
            // console.log('res...', res);
        setToken(res.token)
    },

    // get user info
    async getInfo({ commit, state }) {
        // 1. 获取个人信息
        let userInfo = await getInfo();
        console.log('userInfo...', userInfo);
        commit('SET_NAME', userInfo.data.user_name)
        commit("SET_USERID", userInfo.data.user_id)
        commit('SET_AVATAR', userInfo.data.avatar || 'https://jasonandjay.com/favicon.ico')

        // 2. 获取用户视图权限信息
        let viewAuthority = await getViewAuthority();
        console.log('viewAuthority...', viewAuthority);
        commit('SET_VIEWAUTHORITY', viewAuthority.data);
        return viewAuthority.data;

    },

    // user logout
    logout({ commit, state, dispatch }) {
        return new Promise((resolve, reject) => {
            logout(state.token).then(() => {
                commit('SET_TOKEN', '')
                commit('SET_ROLES', [])
                removeToken()
                resetRouter()

                // reset visited views and cached views
                // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
                dispatch('tagsView/delAllViews', null, { root: true })

                resolve()
            }).catch(error => {
                reject(error)
            })
        })
    },

    // remove token
    resetToken({ commit }) {
        return new Promise(resolve => {
            commit('SET_TOKEN', '')
            commit('SET_ROLES', [])
            removeToken()
            resolve()
        })
    },

    // dynamically modify permissions
    changeRoles({ commit, dispatch }, role) {
        return new Promise(async resolve => {
            const token = role + '-token'

            commit('SET_TOKEN', token)
            setToken(token)

            const { roles } = await dispatch('getInfo')

            resetRouter()

            // generate accessible routes map based on roles
            const accessRoutes = await dispatch('permission/generateRoutes', roles, { root: true })

            // dynamically add accessible routes
            router.addRoutes(accessRoutes)

            // reset visited views and cached views
            dispatch('tagsView/delAllViews', null, { root: true })

            resolve()
        })
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions
}