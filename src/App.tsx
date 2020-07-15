import React, { useEffect } from "react"
import { Switch, BrowserRouter, Route, useLocation, Redirect } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"
import ApolloClient from "apollo-boost"
import Shared from "./pages/shared/Shared"
import MainPage from "./pages/main/MainPage"
import PortfolioPage from "./pages/portfolio/PortfolioPage"
import WorkPage from "./pages/work/WorkPage"
import AuthComplete from "./pages/auth/AuthComplete"
import NotFound from "./pages/errors/NotFound"
import { observer } from "mobx-react"
import useStore from "./store/useStore"

const client = new ApolloClient({
    uri: "https://api.badeev.info/graphql?",
})

const App: React.FC = observer(() => {
    const { AuthService } = useStore()

    useEffect(() => {
        AuthService.loadUser()
    }, [AuthService])

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Shared>
                    <ScrollToTop>
                        <Switch>
                            <Route exact path="/" component={MainPage} />
                            <Route path="/portfolio" component={PortfolioPage} exact />
                            <Route path="/portfolio/:id" component={WorkPage} exact />
                            <Route path="/auth-complete" component={AuthComplete} exact />
                            <Route path="/404" component={NotFound} />
                            <Route component={RedirectToNotFound} />
                        </Switch>
                    </ScrollToTop>
                </Shared>
            </BrowserRouter>
        </ApolloProvider>
    )
})

export default App

const RedirectToNotFound = () => <Redirect to="/404" />

const ScrollToTop: React.FC = (props) => {
    let location = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [location.pathname])

    return <>{props.children}</>
}
