import React from "react"
import { useTagsByWorkIdQuery } from "../../types"
import TagList from "./TagList"
import LocalLoading from "../loading/LocalLoading"

type typeProps = {
    className?: string
    workId: number
}

const WorkTagList: React.FC<typeProps> = (props) => {
    const { data, loading, error } = useTagsByWorkIdQuery({
        variables: {
            workId: props.workId,
        },
    })

    const tags = data?.tagsByWorkId?.map((t) => t?.title)

    if (tags) return loading ? <LocalLoading /> : <TagList tagList={tags} style={{ margin: "0 -5px 10px" }} />
    else return <pre>{error}</pre>
}

export default WorkTagList
