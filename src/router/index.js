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
      import('@/views/redirect/index')
  }]
},
{
  path: '/login',
  component: () =>
    import('@/views/login/index'),
  hidden: true
},
{
  path: '/auth-redirect',
  component: () =>
    import('@/views/login/auth-redirect'),
  hidden: true
},
{
  path: '/404',
  component: () =>
    import('@/views/error-page/404'),
  hidden: true
},
{
  path: '/401',
  component: () =>
    import('@/views/error-page/401'),
  hidden: true
},
{
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [{
    path: 'dashboard',
    component: () =>
      import('@/views/dashboard/index'),
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
        import('@/views/TestManagement/index'),
      name: 'AddItem',
      meta: { title: '添加试题' },
    },
    {
      path: 'TestClassification',
      component: () =>
        import('@/views/TestManagement/TestClassification'),
      name: 'TestClassification',
      meta: { title: '试题分类' },
    },
    {
      path: 'CheckItem',
      component: () =>
        import('@/views/TestManagement/CheckItem'),
      name: 'CheckItem',
      meta: { title: '查看试题' },
    }
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
      import('@/views/class/class mengr/'),
    name: 'Mengr',
    meta: { title: '班级管理' }
  },
  {
    path: 'classroom',
    component: () =>
      import('@/views/class/classroom/'),
    name: 'Classroom',
    meta: { title: '教室管理' }
  },
  {
    path: 'student',
    component: () =>
      import('@/views/class/student/'),
    name: 'Student',
    meta: { title: '学生管理' }
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
  children: [
    {
      path: 'addExam',
      component: () => import('@/views/exam/addExam'),
      name: '添加考试',
      meta: { title: '添加考试', noCache: true }
    },
    {
      path: 'ListExam',
      component: () => import('@/views/exam/ListExam'),
      name: '试卷列表',
      meta: { title: '试卷列表', noCache: true }
    },
    {
      path: 'createExam',
      component: () => import('@/views/exam/createExam'),
      name: '',
      meta: { title: '', noCache: true }
    },
    {
      path: 'detail',
      component: () => import('@/views/exam/detail'),
      name: '',
      meta: { title: '', noCache: true }
    }
  ]
},
{
  path: '/read',
  component: Layout,
  redirect: '/read/waitClass',
  alwaysShow: true,
  name: '阅卷管理',
  meta: { title: '阅卷管理', icon: 'edit' },
  children: [
    {
      path: 'waitClass',
      component: () => import('@/views/read/waitClass'),
      name: '待批班级',
      meta: { title: '待批班级' }
    }
  ]
},
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

export default router