import Layout from '@/layout'

const usershowRouter = {
  path: '/usershow',
  component: Layout,
  // redirect: 'noRedirect',
   name: 'Usershow',
  meta: {
    title: 'usershow',
  },
  children: [
    {
      path: 'usershow/userdata',
      component: () => import('@/views/user/module/usershow/userdata'),
      name: 'Userdata',
      meta: { title: 'userdata', noCache: true }
    },
    {
      path: 'usershow/careddata',
      component: () => import('@/views/user/module/usershow/careddata'),
      name: 'Careddata',
      meta: { title: 'careddata', noCache: true }
    },
    {
      path: 'usershow/apiToken',
      component: () => import('@/views/user/module/usershow/apiToken'),
      name: 'ApiToken',
      meta: { title: 'apiToken', noCache: true }
    }
  ]
}

export default usershowRouter