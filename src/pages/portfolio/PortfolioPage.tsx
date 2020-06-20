import React from "react"
import ProjectCard from "../../components/cards/ProjectCard"
import FadePage from "../../components/fade/FadePage"
import styles from "./PortfolioPage.module.less"
import { Row, Col, Typography } from "antd"
import { getStringDate } from "../../helpers/dateHelpers"
import { useWorksQuery } from "../../types"
import Loading from "../../components/loading/Loading"

const { Title } = Typography

const PortfolioPage: React.FC = () => {
    const { data, loading, error } = useWorksQuery()

    const getWorks = () => {
        if (error) {
            return <pre>{error?.message}</pre>
        }

        const works = data?.works?.nodes
        if (works)
            return works.map((work) => {
                return (
                    <Col span={11}>
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

    return loading ? (
        <Loading />
    ) : (
        <FadePage>
            <div className={styles.wrapperPage}>
                <Row justify="space-between" gutter={[0, 50]}>
                    {getWorks() || <Title>Работы пропали</Title>}
                </Row>
            </div>
        </FadePage>
    )
}

export default PortfolioPage
