import React from "react"
import FadePage from "../../components/fade/FadePage"
import FilteredProjectCards from "../../components/cards/FilteredProjectCards"
import { Row, Col, Typography } from "antd"
import AllTagList from "../../components/tags/AllTagList"
import { useCountQuery } from "../../types"
import LocalLoading from "../../components/loading/LocalLoading"

const PortfolioPage: React.FC = () => {
    const { data, loading } = useCountQuery()

    const { Paragraph } = Typography

    return (
        <FadePage>
            <div className="wrapper-page">
                <Row justify="center">
                    <Col>
                        <AllTagList />
                    </Col>
                </Row>
                {loading ? (
                    <LocalLoading />
                ) : (
                    <Paragraph type="secondary" style={{ textAlign: "center" }}>
                        <em>Сделано {data?.works?.totalCount} проектов</em>
                    </Paragraph>
                )}
                <FilteredProjectCards count={10} className="mt-30" />
            </div>
        </FadePage>
    )
}

export default PortfolioPage
