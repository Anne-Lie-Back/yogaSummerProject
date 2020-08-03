import React from 'react'
import About from '../pages/about'
import Admin from '../pages/admin'
//import Checkout from '../pages/checkout'
import Contact from '../pages/contact'
import Courses from '../pages/courses'
import Faq from '../pages/faq'
import Home from '../pages/home'

import { Route, Switch} from "react-router-dom"

function AppRouter(){
    return (
        <Switch>
            <Route exact path = '/' component = {Home}></Route>
            <Route exact path = '/about' component = {About}></Route>
            <Route exact path = '/admin' component = {Admin}></Route>
            <Route exact path = '/contact' component = {Contact}></Route>
            <Route exact path = '/courses' component = {Courses}></Route>
            <Route path = '/courses/:course'></Route>
            <Route exact path = '/faq' component = {Faq}></Route>
        </Switch>
    )
}

export default AppRouter