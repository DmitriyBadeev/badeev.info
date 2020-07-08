import React from "react"
import { useTagsByWorkIdQuery } from "../../types"
import TagList from "./TagList"
import LocalLoading from "../loading/LocalLoading"

type typeProps = {
    workId: number
}

const WorkTagList: React.FC<typeProps> = (props) => {
    const { data, loading, error } = useTagsByWorkIdQuery({
        variables: {
            workId: props.workId,
        },
    })

    if (error) return <pre>{error}</pre>

    if (loading) return <LocalLoading />

    return <TagList tagList={data?.tagsByWorkId || []} style={{ margin: "0 -5px 10px", justifyContent: "center" }} />
}

export default WorkTagList
