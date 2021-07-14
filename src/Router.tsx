import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { PATH_ROOT, PATH_STUDENTS } from "@consts/routes"
import ScrollToTop from "ScrollToTop"
import LoginPage from "@pages/Login"
import StudentsPage from "@pages/Students"
import NotFoundPage from "@pages/NotFound"


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Switch>
        <Route exact path={PATH_ROOT}>
          <LoginPage />
        </Route>
        <Route exact path={PATH_STUDENTS}>
          <StudentsPage />
        </Route>
        <Route>
          <NotFoundPage />
        </Route>

        <Redirect to={PATH_ROOT} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
