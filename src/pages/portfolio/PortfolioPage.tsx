import React, { useState } from "react"
import FadePage from "../../components/fade/FadePage"
import FilteredProjectCards from "../../components/cards/FilteredProjectCards"
import { Row, Col } from "antd"
import AllTagList from "../../components/tags/AllTagList"

const PortfolioPage: React.FC = () => {
    const [activeTags, setActiveTags] = useState<number[]>([])

    const toggleTag = (id: number) => {
        const isContains = activeTags.includes(id)

        if (isContains) {
            setActiveTags(activeTags.filter((tagId) => tagId !== id))
        } else {
            setActiveTags([...activeTags, id])
        }
    }

    return (
        <FadePage>
            <div className="wrapper-page">
                <Row justify="center">
                    <Col>
                        <AllTagList activeTagsIds={activeTags} toggleTag={toggleTag} />
                    </Col>
                </Row>
                <FilteredProjectCards tagIds={activeTags} count={10} className="mt-30" />
            </div>
        </FadePage>
    )
}

export default PortfolioPage
