import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { PATH_NEW_STUDENT, PATH_ROOT } from "@consts/routes"
import ScrollToTop from "ScrollToTop"
import StudentsPage from "@pages/Students"
import NotFoundPage from "@pages/NotFound"
import NewStudentPage from "@pages/NewStudent"


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Switch>
        <Route exact path={PATH_ROOT}>
          <StudentsPage />
        </Route>
        <Route path={PATH_NEW_STUDENT}>
          <NewStudentPage />
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
