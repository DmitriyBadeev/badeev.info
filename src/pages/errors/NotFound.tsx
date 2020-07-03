import React from "react"
import FadePage from "../../components/fade/FadePage"
import { Empty, Space, Row } from "antd"

const NotFound: React.FC = () => {
    return (
        <FadePage>
            <Row justify="center" style={{ height: "50vh", alignItems: "center" }}>
                <Empty description="Страница не найдена" style={{ fontSize: "24px", color: "#999" }} />
            </Row>
        </FadePage>
    )
}

export default NotFound
