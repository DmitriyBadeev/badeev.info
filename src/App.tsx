import React, { useEffect } from "react"
import { Switch, BrowserRouter, Route, useLocation, Redirect } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import Shared from "./pages/shared/Shared"
import MainPage from "./pages/main/MainPage"
import PortfolioPage from "./pages/portfolio/PortfolioPage"
import WorkPage from "./pages/work/WorkPage"
import NotFound from "./pages/errors/NotFound"

const client = new ApolloClient({
    uri: "https://api.badeev.info/graphql?",
})

const App: React.FC = () => {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Shared>
                    <Switch>
                        <ScrollToTop>
                            <Route path="/" component={MainPage} exact />
                            <Route path="/portfolio" component={PortfolioPage} exact />
                            <Route path="/portfolio/:id" component={WorkPage} exact />
                            <Route path="/404" component={NotFound} exact />
                            <Route component={RedirectToNotFound} />
                        </ScrollToTop>
                    </Switch>
                </Shared>
            </BrowserRouter>
        </ApolloProvider>
    )
}

export default App

const RedirectToNotFound = () => <Redirect to="/404" />

const ScrollToTop: React.FC = (props) => {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return <>{props.children}</>
}
