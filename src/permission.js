import router from './router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/get-page-title'

NProgress.configure({ showSpinner: true }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
    // start progress bar
    NProgress.start()

    // set page title
    document.title = getPageTitle(to.meta.title)

    const hasToken = getToken()

    if (hasToken) {
        if (to.path === '/login') {
            next({ path: '/' })
            NProgress.done()
        } else {

            let hasViewAuthority = store.state.user.viewAuthority && store.state.user.viewAuthoritylength > 0

            if (hasViewAuthority) {
                next()
            } else {
                try {

                    const viewAuthority = await store.dispatch('user/getInfo')
                    console.log(viewAuthority);


                    const accessRoutes = await store.dispatch('permission/generateRoutes', viewAuthority)

                    router.addRoutes(accessRoutes)

                    next({...to, replace: true })
                } catch (error) {
                    console.log('error...', error);
                }
            }
        }
    } else {
        /* has no token*/

        if (whiteList.indexOf(to.path) !== -1) {
            // in the free login whitelist, go directly
            next()
        } else {
            // other pages that do not have permission to access are redirected to the login page.
            next(`/login?redirect=${to.path}`)
            NProgress.done()
        }
    }
})

router.afterEach(() => {
    // finish progress bar
    NProgress.done()
})