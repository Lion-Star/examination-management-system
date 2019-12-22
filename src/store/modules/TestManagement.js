import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getExamType, getAllText, getExamList, getClassList, AddQuestions, insertQuestionsType } from "@/api/TestManagement"

const state = {
    ExamTypeList: [], //分类考试列表
    AllTextList: [], //所有考试列表
    ClassList: [], //所有课程列表
    ExamList: [] //所有考试列表
}

const mutations = {
    setAllText(state, payload) {
        state.AllTextList = payload
    },
    setExamTypeList(state, payload) {
        state.ExamTypeList = payload
    },
    setClassList(state, payload) {
        state.ClassList = payload
    },
    setExamList(state, payload) {
        state.ExamList = payload
    }
}

const actions = {
    //获取所有试题
    async getAllText({ commit, state }, payload) {
        let res = await getAllText()
        commit('setAllText', res.data);
    },
    //所有题目类型
    async getExamType({ commit, state }, payload) {
        let res = await getExamType()
        commit('setExamTypeList', res.data)
        console.log(res.data);

    },
    //所有课程
    async getClassList({ commit, state }) {
        let res = await getClassList()
        res.data.forEach((item) => {
            item.show = false
        })
        commit('setClassList', res.data)

    },
    //所有考试类型
    async getExamList({ commit, state }) {
        let res = await getExamList()
        commit('setExamList', res.data)
    },
    //添加试题
    async AddQuestions({ commit, state }, payload) {
        let res = await AddQuestions(payload)
    },
    //添加试题类型
    async insertQuestionsType({ commit, state }, payload) {
        console.log(payload);

        let res = await insertQuestionsType(payload)
        console.log(res);
    },

}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}