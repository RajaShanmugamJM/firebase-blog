import { Route } from 'vue-router';

export default function isLoggedIn(to: Route, from: Route, next: Function) {
    if (to.meta["authenticated"] == false) {
        next();
    } else {
        next('/signin');
    }
}