import React from "react"
import { Row, Col } from "antd"
import { useWorksByTagIdsQuery } from "../../types"
import { getStringDate } from "../../helpers/dateHelpers"
import ProjectCard from "./ProjectCard"
import Loading from "../loading/Loading"
import FadePage from "../fade/FadePage"
import NoData from "../etc/NoData"
import { observer } from "mobx-react"
import useStore from "../../store/useStore"

type propTypes = {
    className?: string
    count: number
}

const FilteredProjectCards: React.FC<propTypes> = observer((props) => {
    const { tagStore } = useStore()

    const { data, loading, error } = useWorksByTagIdsQuery({
        variables: {
            tagIds: tagStore.activeTags,
            count: props.count,
        },
    })

    if (error) return <pre>{error?.message}</pre>

    if (loading) return <Loading />

    const getWorks = () => {
        const works = data?.worksByTagIds?.nodes

        if (works && works.length !== 0) {
            const workCards = works.map((work) => (
                <Col lg={11} key={work?.id}>
                    <ProjectCard
                        id={work?.id}
                        title={work?.title}
                        date={getStringDate(work?.date)}
                        img={work?.imgPath || ""}
                        desc={work?.shortDescription}
                    />
                </Col>
            ))

            return (
                <Row justify="space-between" gutter={[0, 20]}>
                    {workCards}
                </Row>
            )
        }

        return <NoData />
    }

    return <FadePage className={props.className}>{getWorks()}</FadePage>
})

export default FilteredProjectCards
