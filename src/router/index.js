import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [{
        path: '/redirect',
        component: Layout,
        hidden: true,
        children: [{
            path: '/redirect/:path*',
            component: () =>
                import ('@/views/redirect/index')
        }]
    },
    {
        path: '/login',
        component: () =>
            import ('@/views/login/index'),
        hidden: true
    },
    {
        path: '/auth-redirect',
        component: () =>
            import ('@/views/login/auth-redirect'),
        hidden: true
    },
    {
        path: '/404',
        component: () =>
            import ('@/views/error-page/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () =>
            import ('@/views/error-page/401'),
        hidden: true
    }
]

export const asyncRoutes = [

    { path: '*', redirect: '/404', hidden: true }
]

export const authorityRoutes = [{
        path: '/TestManagement',
        component: Layout,
        name: 'TestManagement',
        meta: {
            title: 'TestManagement.title',
            icon: 'dashboard'
        },
        children: [

            {
                path: 'AddItem',
                component: () =>
                    import ('@/views/TestManagement/index'),
                name: 'AddItem',
                meta: { title: 'TestManagement.AddItem', view_id: 'main-addQuestions' }
            },
            {
                path: 'EditItem',
                hidden: true,
                component: () =>
                    import ('@/views/TestManagement/EditItem'),
                name: 'EditItem',
                meta: { title: '修改试题', view_id: 'main-addQuestions' }
            },
            {
                path: 'TestClassification',
                component: () =>
                    import ('@/views/TestManagement/TestClassification'),
                name: 'TestClassification',
                meta: { title: 'TestManagement.TestClassification', view_id: 'main-questionsType' }
            },
            {
                path: 'CheckItem',
                component: () =>
                    import ('@/views/TestManagement/CheckItem'),
                name: 'CheckItem',
                meta: { title: 'TestManagement.CheckItem', view_id: 'main-watchQuestions' }
            },
            {
                path: 'Detail',
                hidden: true,
                component: () =>
                    import ('@/views/TestManagement/Detail'),
                name: 'Detail',
                meta: { title: '查看详情', view_id: 'main-addQuestions' }
            },
            {
                path: 'GGBOND',
                hidden: "true",
                component: () =>
                    import ('@/views/components-demo/avatar-upload'),
                meta: { title: 'GGBOND', view_id: 'main-addQuestions' }
            }

        ]
    },
    {
        path: '/addUser',
        component: Layout,
        meta: { title: '用户管理', icon: 'user', noCache: true },
        children: [{
            path: 'addUser',
            component: () =>
                import ('@/views/user/addUser'),
            name: 'AddUser',
            meta: { title: '添加用户', view_id: "main-addUser" } // 添加用户
        }, {
            path: '/usershow',
            component: () =>
                import ('@/views/user/usershow'),
            name: 'Usershow',
            meta: { title: '用户展示', view_id: "main-showUser" } // 用户展示
        }]
    },
    {
        path: '/class',
        component: Layout,
        redirect: '/class/list',
        name: 'Class',
        meta: {
            title: '班级管理',
            icon: 'list'
        },
        children: [{
                path: 'mengr',
                component: () =>
                    import ('@/views/class/class mengr/'),
                name: 'Mengr',
                meta: { title: '班级管理', view_id: "main-grade" }
            },
            {
                path: 'classroom',
                component: () =>
                    import ('@/views/class/classroom/'),
                name: 'Classroom',
                meta: { title: '教室管理', view_id: "main-room" }
            },
            {
                path: 'student',
                component: () =>
                    import ('@/views/class/student/'),
                name: 'Student',
                meta: { title: '学生管理', view_id: "main-student" }
            }
        ]
    },
    {

        path: '/exam',
        component: Layout,
        redirect: 'noRedirect',
        name: '考试管理',
        meta: {
            title: '考试管理',
            icon: 'user'
        },
        children: [{
                path: 'addExam',
                component: () =>
                    import ('@/views/exam/addExam'),
                name: '添加考试',
                meta: { title: '添加考试', view_id: "main-addExam" }
            },
            {
                path: 'ListExam',
                component: () =>
                    import ('@/views/exam/ListExam'),
                name: '试卷列表',
                meta: { title: '试卷列表', view_id: "main-examList" }
            },
            {
                path: '/exam/createExam',
                hidden: true,
                component: () =>
                    import ('@/views/exam/createExam'),
                meta: { title: '创建试卷', view_id: "main-examList" }

            },
            {
                path: '/exam/detail',
                hidden: true,
                component: () =>
                    import ('@/views/exam/detail'),
                meta: { title: '试卷详情', view_id: "main-examList" }

            }
        ]
    }
]



const createRouter = () => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router