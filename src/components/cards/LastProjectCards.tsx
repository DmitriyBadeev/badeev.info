import React from "react"
import { Row, Col } from "antd"
import { useLastWorksQuery } from "../../types"
import { getStringDate } from "../../helpers/dateHelpers"
import ProjectCard from "./ProjectCard"
import Loading from "../loading/Loading"
import { Typography } from "antd"
import FadePage from "../fade/FadePage"

type propTypes = {
    count: number
    className?: string
}

const LastProjectCards: React.FC<propTypes> = (props) => {
    const { data, loading, error } = useLastWorksQuery({
        variables: {
            count: props.count,
        },
    })

    const { Title } = Typography

    const getWorks = () => {
        if (error) {
            return <pre>{error?.message}</pre>
        }

        const works = data?.works?.nodes
        if (works)
            return works.map((work) => {
                return (
                    <Col lg={11}>
                        <ProjectCard
                            title={work?.title}
                            date={getStringDate(work?.date)}
                            img={work?.imgPath}
                            route="/"
                            desc={work?.shortDescription}
                        />
                    </Col>
                )
            })
    }

    return (
        <>
            {loading ? (
                <Loading />
            ) : (
                <FadePage>
                    <Row justify="space-between" gutter={[0, 50]} className={props.className}>
                        {getWorks() || <Title>Работы пропали</Title>}
                    </Row>
                </FadePage>
            )}
        </>
    )
}

export default LastProjectCards
