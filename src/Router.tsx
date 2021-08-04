import React from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import { PATH_NEW_STUDENT, PATH_STUDENTS, PATH_STUDENT_ID } from "@consts/routes"
import ScrollToTop from "ScrollToTop"
import StudentsPage from "@pages/Students"
import NotFoundPage from "@pages/NotFound"
import NewStudentPage from "@pages/NewStudent"
import StudentPage from "@pages/StudentPage/StudentPage"


const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      
      <Switch>
        <Route exact path="/">
          <Redirect to={PATH_STUDENTS} />
        </Route>
        <Route exact path={PATH_STUDENTS}>
          <StudentsPage />
        </Route>
        <Route path={PATH_NEW_STUDENT}>
          <NewStudentPage />
        </Route>

        <Route exact path={PATH_STUDENT_ID}>
          <StudentPage/>
        </Route>

        <Route>
          <NotFoundPage />
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
