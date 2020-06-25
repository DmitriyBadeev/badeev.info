import React from "react"
import styles from "./WorkPage.module.less"
import { useParams } from "react-router-dom"
import FadePage from "../../components/fade/FadePage"

type paramsTypes = {
    id: string
}

const WorkPage: React.FC = () => {
    let { id } = useParams<paramsTypes>()

    return (
        <FadePage>
            <h1>РАБОТА {id}</h1>
        </FadePage>
    )
}

export default WorkPage
