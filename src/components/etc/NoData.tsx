import React from "react"
import FadePage from "../fade/FadePage"
import { Empty, Row } from "antd"

const NoData: React.FC = () => {
    return (
        <FadePage>
            <Row justify="center" style={{ height: "50vh", alignItems: "center" }}>
                <Empty description="Таких работ нет" style={{ fontSize: "24px", color: "#999" }} />
            </Row>
        </FadePage>
    )
}

export default NoData
