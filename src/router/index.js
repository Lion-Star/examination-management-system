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
    },
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [{
            path: 'dashboard',
            component: () =>
                import ('@/views/dashboard/index'),
            name: 'Dashboard',
            meta: { title: 'dashboard', icon: 'dashboard', affix: true }
        }]
    },
    {
        path: '/TestManagement',
        component: Layout,
        name: 'TestManagement',
        meta: {
            title: '试题管理',
            icon: 'dashboard'
        },
        children: [

            {
                path: 'AddItem',
                component: () =>
                    import ('@/views/TestManagement/index'),
                name: 'AddItem',
                meta: { title: '添加试题' }
            },
            {
                path: 'EditItem',
                hidden: true,
                component: () =>
                    import ('@/views/TestManagement/EditItem'),
                name: 'EditItem',
                meta: { title: '修改试题' }
            },
            {
                path: 'TestClassification',
                component: () =>
                    import ('@/views/TestManagement/TestClassification'),
                name: 'TestClassification',
                meta: { title: '试题分类' }
            },
            {
                path: 'CheckItem',
                component: () =>
                    import ('@/views/TestManagement/CheckItem'),
                name: 'CheckItem',
                meta: { title: '查看试题' }
            },
            {
                path: 'Detail',
                hidden: true,
                component: () =>
                    import ('@/views/TestManagement/Detail'),
                name: 'Detail',
                meta: { title: '查看详情' }
            },

        ]
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
                meta: { title: '班级管理' }
            },
            {
                path: 'classroom',
                component: () =>
                    import ('@/views/class/classroom/'),
                name: 'Classroom',
                meta: { title: '教室管理' }
            },
            {
                path: 'student',
                component: () =>
                    import ('@/views/class/student/'),
                name: 'Student',
                meta: { title: '学生管理' }
            }
        ]
    }
]

export const asyncRoutes = [

    { path: '*', redirect: '/404', hidden: true }
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

export default routers