import React from "react"
import { noopTemplate as css } from "lib/utils"
import { Switch, Route, Redirect } from "react-router-dom"

import HomePage from "./home"

export default () => {
  return (
    <div
      className="fd-c"
      css={css`
        min-height: 100vh;
      `}
    >
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/home" component={HomePage} />
        <Route>{() => <Redirect to="/" />}</Route>
      </Switch>
    </div>
  )
}
