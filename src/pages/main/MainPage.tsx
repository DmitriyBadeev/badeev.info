import React from "react"
import styles from "./MainPage.module.less"
import { Row, Col, Typography, Button } from "antd"
import Avatar from "../../components/avatar/Avatar"
import { getDaysToEnd } from "../../helpers/dateHelpers"
import Card from "../../components/cards/Card"
import Line from "../../components/etc/Line"
import TagList from "../../components/tags/TagList"
import LocalLink from "../../components/links/LocalLink"
import GlobalLink from "../../components/links/GlobalLink"
import { ArrowRightOutlined } from "@ant-design/icons"
import FadePage from "../../components/fade/FadePage"
import Contacts from "../../components/avatar/Contacts"
import LastProjectCards from "../../components/cards/LastProjectCards"
import webSvg from "../../assets/web.svg"
import { useFrontendTagsQuery, useBackendTagsQuery } from "../../types"
import LocalLoading from "../../components/loading/LocalLoading"

const { Title, Paragraph } = Typography

const MainPage: React.FC = () => {
    const frontendTags = useFrontendTagsQuery()
    const backendTags = useBackendTagsQuery()

    return (
        <>
            <div className="main-diagonal" />
            <FadePage>
                <div className={`${styles.figure} ${styles.square}`} />
                <div className={`${styles.figure} ${styles.circle}`} />
                <div className={`${styles.figure} ${styles.rectangle}`} />
                <div className="wrapper-page">
                    <section className={styles.mainSectionWrapper}>
                        <div className={styles.leftCol}>
                            <img src={webSvg} alt="Веб" />
                        </div>
                        <div className={styles.rightCol}>
                            <h2 className={styles.subMainTitle}>Веб-разработчик</h2>
                            <h1 className={styles.mainTitle}>
                                Дмитрий
                                <br />
                                Бадеев
                            </h1>
                            <Button size="large" type="primary" className={styles.btn}>
                                <LocalLink to="/portfolio">Портфолио</LocalLink>
                            </Button>
                        </div>
                    </section>

                    <section className={styles.infoSectionWrapper}>
                        <Row justify="space-between">
                            <Col
                                xl={{ span: 6, offset: 0 }}
                                lg={{ span: 10, offset: 0 }}
                                md={{ span: 12, offset: 6 }}
                                sm={{ span: 16, offset: 4 }}
                                xs={{ span: 24, offset: 0 }}
                            >
                                <Avatar withDesc={true} />
                            </Col>
                            <Col xl={{ span: 16 }} lg={{ span: 12 }} md={{ span: 20, offset: 2 }}>
                                <Row justify="space-between" gutter={[0, 48]}>
                                    <Col xl={{ span: 11 }} lg={{ span: 24 }}>
                                        <Title level={2}>Обо мне</Title>
                                        <Paragraph>
                                            Привет! Я&nbsp;веб-разработчик. Моя сфера деятельности&nbsp;&mdash; это все,
                                            что связано со&nbsp;всемирной паутиной: сайты, веб-приложения, программные
                                            веб-интерфейсы. Я&nbsp;профессионально занимаюсь разработкой
                                            и&nbsp;проектированием интерфейсов уже несколько лет.
                                        </Paragraph>
                                        <Paragraph>
                                            Родился и&nbsp;вырос в&nbsp;городе Кургане, сейчас живу
                                            в&nbsp;Екатеринбурге. Учусь в&nbsp;УрФУ на&nbsp;IT-специальности
                                            и&nbsp;стараюсь постоянно развиваться в&nbsp;своей сфере.
                                        </Paragraph>
                                    </Col>
                                    <Col xl={{ span: 11 }} lg={{ span: 24 }}>
                                        <Title level={2}>Образование</Title>
                                        <Paragraph>
                                            Среднее (полное) <br />
                                            СОШ №24, город Курган <br />
                                            2007–2018 гг.
                                        </Paragraph>
                                        <Paragraph>
                                            Высшее (Бакалавр) <br />
                                            УрФУ им. Ельцина, ИРИТ-РтФ <br />
                                            специальность «Программная инженерия» <br />
                                            2018–2022 гг.
                                        </Paragraph>
                                        <Paragraph type="secondary">До конца {getDaysToEnd()}</Paragraph>
                                    </Col>
                                </Row>
                                <Row justify="space-between" className="mt-60">
                                    <Col xl={{ span: 11 }} lg={{ span: 24 }}>
                                        <Title level={2}>Навыки</Title>
                                        <Card className="mt-40 p-40">
                                            <Title level={4}>Frontend</Title>
                                            <Line />
                                            <Paragraph className="mt-20">
                                                Сверстаю и задизайню сайт, адаптирую его под все телефоны, планшеты,
                                                мониторы и заставлю это все работать одинаково во всех браузерах.
                                            </Paragraph>
                                            {frontendTags.loading ? (
                                                <LocalLoading />
                                            ) : (
                                                <TagList tagList={frontendTags.data?.frontendTags || []} />
                                            )}
                                        </Card>
                                    </Col>
                                    <Col xl={{ span: 11 }} lg={{ span: 24 }}>
                                        <Title
                                            level={2}
                                            style={{
                                                opacity: 0,
                                                cursor: "default",
                                            }}
                                        >
                                            Навыки
                                        </Title>
                                        <Card className="mt-40 p-40">
                                            <Title level={4}>Backend</Title>
                                            <Line />
                                            <Paragraph className="mt-20">
                                                Напишу сложную бизнес-логику, настрою CMS, организую базу данных и
                                                заставлю большую и сложную систему работать, как часы.
                                            </Paragraph>
                                            {backendTags.loading ? (
                                                <LocalLoading />
                                            ) : (
                                                <TagList tagList={backendTags.data?.backendTags || []} />
                                            )}
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <Title level={2}>Последние проекты</Title>
                        <LastProjectCards count={2} className="mt-40" />

                        <div className={styles.linkContainer}>
                            <LocalLink to="/portfolio" className={styles.link}>
                                Все работы <ArrowRightOutlined />
                            </LocalLink>
                        </div>
                    </section>

                    <section>
                        <div className={styles.mainContacts}>
                            <div className={styles.innerContacts}>
                                <div className={styles.mainMail}>
                                    <GlobalLink to="mailto:mail@badeev.info">mail@badeev.info</GlobalLink>
                                </div>
                                <div className={styles.mainOther}>
                                    <Contacts SizeInPixel={50} />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </FadePage>
        </>
    )
}

export default MainPage
