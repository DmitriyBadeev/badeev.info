import React from "react"
import FadePage from "../../components/fade/FadePage"
import LastProjectCards from "../../components/cards/LastProjectCards"

const PortfolioPage: React.FC = () => {
    return (
        <FadePage>
            <div className="wrapper-page">
                <LastProjectCards count={12} className="mt-30" />
            </div>
        </FadePage>
    )
}

export default PortfolioPage
