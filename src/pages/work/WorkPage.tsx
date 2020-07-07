import React, { CSSProperties, useEffect } from "react"
import { useParams } from "react-router-dom"
import FadePage from "../../components/fade/FadePage"
import { useWorkByIdQuery } from "../../types"
import Loading from "../../components/loading/Loading"
import { Typography, Row, Space, Col } from "antd"
import WorkTagList from "../../components/tags/WorkTagList"
import parse from "html-react-parser"
import styles from "./WorkPage.module.less"
import { getStringDate } from "../../helpers/dateHelpers"
import GlobalLink from "../../components/links/GlobalLink"
import Line from "../../components/etc/Line"
import LastProjectCards from "../../components/cards/LastProjectCards"

type paramsTypes = {
    id: string
}

const { Title, Paragraph } = Typography

const textSize: CSSProperties = {
    fontSize: "1.5rem",
}

const WorkPage: React.FC = () => {
    let { id } = useParams<paramsTypes>()

    const { data, loading } = useWorkByIdQuery({
        variables: {
            id: Number(id),
        },
    })

    useEffect(() => {
        if (!loading && data?.workById === null) {
            window.location.replace("/404")
        }
    }, [loading, data])

    const renderHtml = () => {
        if (work != null && work.html !== null) {
            return parse(work.html ?? "")
        }
    }

    const renderAuthors = () => {
        const authors = work?.authors?.map((el) => {
            if (el?.link)
                return (
                    <div key={el.id}>
                        <GlobalLink to={el?.link}>{el.name}</GlobalLink>: {el.role}
                    </div>
                )
            else if (el) {
                return (
                    <div key={el.id}>
                        {el?.name}: {el?.role}
                    </div>
                )
            }
        })

        return (
            <Space direction="vertical" style={{ textAlign: "center", fontSize: "20px" }}>
                {authors}
            </Space>
        )
    }

    const work = data?.workById

    return loading ? (
        <Loading />
    ) : (
        <FadePage>
            <div className="wrapper-page">
                <Row justify="center">
                    <Col lg={18}>
                        <WorkTagList workId={Number(id)} />
                    </Col>
                </Row>
                <div className={styles.divider} />
                <Title level={2} style={{ textAlign: "center" }}>
                    {work?.title}
                </Title>
                <Row className="mt-30 mb-50">
                    <Col lg={{ offset: 3, span: 16 }}>
                        <Paragraph style={{ ...textSize }} className={styles.paragraph}>
                            <em>Задача:</em> {work?.task}
                        </Paragraph>
                    </Col>
                </Row>
            </div>

            <div className="content">{renderHtml()}</div>
            <div className={styles.afterWorkDesc}>
                <Paragraph style={textSize}>
                    <em>Сделано {getStringDate(work?.date)}</em>
                </Paragraph>
                {work?.authors?.length !== 0 && (
                    <>
                        <Paragraph style={textSize} className="mt-20">
                            <em>Участвовали в работе</em>
                        </Paragraph>
                        {renderAuthors()}
                    </>
                )}
            </div>

            {work?.link && (
                <Paragraph
                    className="mt-40"
                    style={{
                        ...textSize,
                        textAlign: "center",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        padding: "0 10px",
                    }}
                >
                    <GlobalLink to={work?.link}>{work?.link}</GlobalLink>
                </Paragraph>
            )}

            <Row className="wrapper-page">
                <Col span={24}>
                    <Line className="mt-40 mb-40" />
                    <Title level={2}>Ещё</Title>
                </Col>
                <LastProjectCards count={2} className="mt-20" />
            </Row>
        </FadePage>
    )
}

export default WorkPage
