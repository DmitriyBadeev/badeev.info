import React from "react"
import TagStore from "./TagStore"
import NavStore from "./NavStore"
import AuthService from "./AuthService"

const StoreContext = React.createContext({
    tagStore: new TagStore(),
    navStore: new NavStore(),
    AuthService: new AuthService(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
