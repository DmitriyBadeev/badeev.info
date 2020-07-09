import React from "react"
import { useTagsQuery } from "../../types"
import TagList from "./TagList"
import LocalLoading from "../loading/LocalLoading"

const AllTagList: React.FC = () => {
    const { data, loading, error } = useTagsQuery()

    if (error) return <pre>{error}</pre>

    if (loading) return <LocalLoading />

    return <TagList tagList={data?.tags || []} style={{ margin: "0 -5px 1.5rem", justifyContent: "center" }} />
}

export default AllTagList
