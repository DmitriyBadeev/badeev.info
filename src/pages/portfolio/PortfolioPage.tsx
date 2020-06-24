import React from "react"
import FadePage from "../../components/fade/FadePage"
import styles from "./PortfolioPage.module.less"
import LastProjectCards from "../../components/cards/LastProjectCards"

const PortfolioPage: React.FC = () => {
    return (
        <FadePage>
            <div className="mt-40"></div>
            <div className="wrapper-page">
                <LastProjectCards count={5} />
            </div>
        </FadePage>
    )
}

export default PortfolioPage
