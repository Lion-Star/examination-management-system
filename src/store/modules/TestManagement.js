import { getToken, setToken, removeToken } from '@/utils/auth'
import router, { resetRouter } from '@/router'
import { getExamType, getAllText, getExamList, getClassList, AddQuestions, insertQuestionsType, searchQuestion, updateQuestions } from "@/api/TestManagement"

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
    async getExamType({ commit }, ) {
        let res = await getExamType()
        commit('setExamTypeList', res.data)
    },
    //所有课程
    async getClassList({ commit }) {
        let res = await getClassList()
        res.data.forEach((item) => {
            item.show = false
        })
        commit('setClassList', res.data)
    },
    //所有考试类型
    async getExamList({ commit }) {
        let res = await getExamList()
        commit('setExamList', res.data)
    },
    //添加试题
    async AddQuestions({}, payload) {
        await AddQuestions(payload)
    },
    //添加试题类型
    async insertQuestionsType({}, payload) {
        await insertQuestionsType(payload)
    },
    //查询试题
    async searchQuestion({ commit, state }, payload) {
        let res = await searchQuestion(payload)
        commit('setAllText', res.data)
    },
    //更新试题
    async updateQuestions({}, payload) {
        await updateQuestions(payload)
    }
}


export default {
    namespaced: true,
    state,
    mutations,
    actions
}