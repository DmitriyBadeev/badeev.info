import React from "react"
import { Row, Col } from "antd"
import { useWorksByTagIdsQuery } from "../../types"
import { getStringDate } from "../../helpers/dateHelpers"
import ProjectCard from "./ProjectCard"
import Loading from "../loading/Loading"
import { Typography } from "antd"
import FadePage from "../fade/FadePage"

type propTypes = {
    className?: string
    tagIds: number[]
    count: number
}

const FilteredProjectCards: React.FC<propTypes> = (props) => {
    const { data, loading, error } = useWorksByTagIdsQuery({
        variables: {
            tagIds: props.tagIds,
            count: props.count,
        },
    })

    const { Title } = Typography

    if (error) return <pre>{error?.message}</pre>

    if (loading) return <Loading />

    const getWorks = () => {
        const works = data?.worksByTagIds?.nodes
        if (works)
            return works.map((work) => (
                <Col lg={11} key={work?.id}>
                    <ProjectCard
                        id={work?.id}
                        title={work?.title}
                        date={getStringDate(work?.date)}
                        img={work?.imgPath || ""}
                        desc={work?.shortDescription}
                    />
                </Col>
            ))

        return <Title>Работы пропали</Title>
    }

    return (
        <FadePage className={props.className}>
            <Row justify="space-between" gutter={[0, 20]}>
                {getWorks()}
            </Row>
        </FadePage>
    )
}

export default FilteredProjectCards
