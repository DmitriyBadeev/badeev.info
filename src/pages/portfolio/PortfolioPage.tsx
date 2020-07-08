import React from "react"
import FadePage from "../../components/fade/FadePage"
import FilteredProjectCards from "../../components/cards/FilteredProjectCards"
import { Row, Col } from "antd"
import AllTagList from "../../components/tags/AllTagList"

const PortfolioPage: React.FC = () => {
    return (
        <FadePage>
            <div className="wrapper-page">
                <Row justify="center">
                    <Col>
                        <AllTagList />
                    </Col>
                </Row>
                <FilteredProjectCards count={10} className="mt-30" />
            </div>
        </FadePage>
    )
}

export default PortfolioPage
