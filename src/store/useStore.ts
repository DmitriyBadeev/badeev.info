import React from "react"
import TagStore from "./TagStore"
import NavStore from "./NavStore"

const StoreContext = React.createContext({
    tagStore: new TagStore(),
    navStore: new NavStore(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
