import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: 'dashboard', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/class',
    component: Layout,
    redirect: '/class/list',
    name: 'Class',
    meta: {
      title: 'class',
      icon: 'list'
    },
    children: [
      {
        path: 'mengr',
        component: () => import('@/views/class/class mengr/'),
        name: 'Mengr',
        meta: { title: 'class'}
      },
      {
        path: 'classroom',
        component: () => import('@/views/class/classroom/'),
        name: 'Classroom',
        meta: { title: 'classroom'}
      },
      {
        path: 'student',
        component: () => import('@/views/class/student/'),
        name: 'Student',
        meta: { title: 'student'}
      },
      {
        path: 'uploading',
        component: () => import('@/views/class/upLoading'),
        name: 'Uploading',
        meta: { title: 'uploading'}
      }
    ]
  }
]

export const asyncRoutes = [
  
  { path: '*', redirect: '/404', hidden: true }
]

export const authorityRoutes = [
  {
    path: '/exam',
    component: Layout,
    meta: { title: '试题管理', icon: 'example'},
    children: [{
      path: 'add',
      component: ()=>import('@/views/exam/index'),
      name: 'Exam',
      meta: {title: '添加试题', icon: 'dashboard', view_id: 'main-addQuestions'}
    },{
      path: 'classify',
      component: ()=>import('@/views/exam/index'),
      name: 'Exam',
      meta: {title: '试题分类', icon: 'dashboard', view_id: 'main-questionsType'}
    },{
      path: 'view',
      component: ()=>import('@/views/exam/index'),
      name: 'Exam',
      meta: {title: '查看试题', icon: 'dashboard', view_id: 'main-watchQuestions123131312'}
    }]
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
