import React from "react"
import { BrowserRouter } from "react-router-dom"

import Root from "pages"
import GlobalStyles from "styles/global"

import { StylesProvider } from "@material-ui/core"

import { ThemeProvider } from "theme"

import { Helmet } from "react-helmet"

export default () => {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <StylesProvider injectFirst>
          <ThemeProvider dark={false}>
            <Helmet>
              <title>Digital Toast</title>
              <meta name="description" content="Simple task management" />
            </Helmet>

            <GlobalStyles />
            <App />
          </ThemeProvider>
        </StylesProvider>
      </BrowserRouter>
    </React.StrictMode>
  )
}

const App = () => {
  return <Root />
}
