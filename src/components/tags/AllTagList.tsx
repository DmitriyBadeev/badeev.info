import React from "react"
import { useTagsQuery } from "../../types"
import TagList from "./TagList"
import LocalLoading from "../loading/LocalLoading"

type propTypes = {
    activeTagsIds: number[]
    toggleTag: (id: number) => void
}

const AllTagList: React.FC<propTypes> = (props) => {
    const { data, loading, error } = useTagsQuery()

    if (error) return <pre>{error}</pre>

    if (loading) return <LocalLoading />

    return (
        <TagList
            tagList={data?.tags || []}
            style={{ margin: "0 -5px 2rem", justifyContent: "center" }}
            activeTagsIds={props.activeTagsIds}
            toggleTag={props.toggleTag}
        />
    )
}

export default AllTagList
