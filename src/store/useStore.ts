import React from "react"
import TagStore from "./TagStore"

const StoreContext = React.createContext({
    tagStore: new TagStore(),
})

const useStore = () => React.useContext(StoreContext)

export default useStore
