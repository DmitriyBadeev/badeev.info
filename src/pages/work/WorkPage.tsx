import React from "react"
import { useParams } from "react-router-dom"
import FadePage from "../../components/fade/FadePage"
import { useWorkByIdQuery } from "../../types"
import Loading from "../../components/loading/Loading"
import { Typography, Row } from "antd"
import WorkTagList from "../../components/tags/WorkTagList"
import parse from "html-react-parser"

type paramsTypes = {
    id: string
}

const { Title, Paragraph } = Typography

const WorkPage: React.FC = () => {
    let { id } = useParams<paramsTypes>()

    const { data, loading } = useWorkByIdQuery({
        variables: {
            id: Number(id),
        },
    })

    const renderHtml = () => {
        if (work != null && work.html !== null) {
            return parse(work.html ?? "")
        }
    }

    const work = data?.workById

    return loading ? (
        <Loading />
    ) : (
        <FadePage>
            <div className="wrapper-page">
                <Row justify="center">
                    <WorkTagList workId={Number(id)} />
                </Row>
                <Title level={2} style={{ textAlign: "center" }}>
                    {work?.title}
                </Title>
                <Paragraph style={{ fontSize: "1.5rem", width: "60vw", margin: "30px 0 30px 10vw" }}>
                    <em>Задача:</em> {work?.task}
                </Paragraph>
            </div>

            <div className="content">{renderHtml()}</div>
        </FadePage>
    )
}

export default WorkPage
