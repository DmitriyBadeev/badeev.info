import React from "react"
import { useParams } from "react-router-dom"
import FadePage from "../../components/fade/FadePage"
import { useWorkByIdQuery } from "../../types"
import Loading from "../../components/loading/Loading"
import { Typography } from "antd"

type paramsTypes = {
    id: string
}

const { Title } = Typography

const WorkPage: React.FC = () => {
    let { id } = useParams<paramsTypes>()

    const { data, loading } = useWorkByIdQuery({
        variables: {
            id: Number(id),
        },
    })

    return loading ? (
        <Loading />
    ) : (
        <FadePage>
            <div className="wrapper-page">
                <Title level={1}>{data?.worksById?.title}</Title>
            </div>
        </FadePage>
    )
}

export default WorkPage
