import React from "react"
import styles from "./MainPage.module.less"
import { Row, Col, Typography } from "antd"
import Avatar from "../../components/avatar/Avatar"
import { getDaysToEnd } from "../../helpers/dateHelpers"
import Card from "../../components/cards/Card"
import Line from "../../components/cards/Line"
import TagList from "../../components/tags/TagList"
import ProjectCard from "../../components/cards/ProjectCard"
import LocalLink from "../../components/links/LocalLink"
import { ArrowRightOutlined } from "@ant-design/icons"
import FadePage from "../../components/fade/FadePage"

import img1 from "../../assets/min.png"
import img2 from "../../assets/min2.png"
import webSvg from "../../assets/web.svg"

const { Title, Paragraph } = Typography

const MainPage: React.FC = () => {
    return (
        <>
            <div className="main-diagonal" />
            <FadePage>
                <div className={`${styles.figure} ${styles.square}`} />
                <div className={`${styles.figure} ${styles.circle}`} />
                <div className={`${styles.figure} ${styles.rectangle}`} />
                <div className={styles.wrapperPage}>
                    <section className={styles.mainSectionWrapper}>
                        <div className={styles.leftCol}>
                            <img src={webSvg} alt="Веб" />
                        </div>
                        <div className={styles.rightCol}>
                            <h2 className={styles.subMainTitle}>Веб-разработчик</h2>
                            <h1 className={styles.mainTitle}>
                                Дмитрий <br /> Бадеев
                            </h1>
                        </div>
                    </section>

                    <section className={styles.infoSectionWrapper}>
                        <Row justify="space-between">
                            <Col span={6}>
                                <Avatar withDesc={true} />
                            </Col>
                            <Col span={16}>
                                <Row justify="space-between">
                                    <Col span={11}>
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
                                    <Col span={11}>
                                        <Title level={2}>Образование</Title>
                                        <Paragraph>
                                            Среднее (полное) <br />
                                            СОШ №24, город Курган <br />
                                            2007–2018 гг.
                                        </Paragraph>
                                        <Paragraph>
                                            Высшее (Бакалавр) <br />
                                            УрФУ им. Ельцина, ИРИТ-РтФ <br />
                                            специальность “Программная инженерия” <br />
                                            2018–2022 гг.
                                        </Paragraph>
                                        <Paragraph type="secondary">До конца {getDaysToEnd()}</Paragraph>
                                    </Col>
                                </Row>
                                <Row justify="space-between" className="mt-60">
                                    <Col span={11}>
                                        <Title level={2}>Навыки</Title>
                                        <Card className="mt-40 p-40">
                                            <Title level={4}>Frontend</Title>
                                            <Line />
                                            <Paragraph className="mt-20">
                                                Задизайню и сверстаю сайт, адаптирую его под все телефоны, планшеты,
                                                мониторы и заставлю это все работать одинаково во всех браузерах.
                                            </Paragraph>
                                            <TagList
                                                tagList={[
                                                    "HTML",
                                                    "CSS",
                                                    "SaSS",
                                                    "SCSS",
                                                    "LESS",
                                                    "PostCSS",
                                                    "JS",
                                                    "TypeScript",
                                                    "ReactJS",
                                                    "Webpack",
                                                    "Gulp",
                                                    "Дизайн",
                                                ]}
                                            />
                                        </Card>
                                    </Col>
                                    <Col span={11}>
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
                                            <TagList
                                                tagList={[
                                                    "C#",
                                                    "ASP.NET Core",
                                                    "REST API",
                                                    "ООП",
                                                    "Entity Framework",
                                                    "CMS",
                                                    "Базы данных",
                                                    "MSSql",
                                                    "PostgreSql",
                                                ]}
                                            />
                                        </Card>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </section>

                    <section>
                        <Title level={2}>Последние проекты</Title>
                        <Row justify="space-between" className="mt-40">
                            <Col span={11}>
                                <ProjectCard
                                    title="Доступный ремонт"
                                    date="28 января 2020 г."
                                    img={img1}
                                    route="/"
                                    desc="
                                    Красивый и современный сайт для компании, предоставляющей услуги по ремонту жилых
                                    помещений и офисов. На сайте можно бесплатно составить смету, а также оплатить услуги онлайн."
                                />
                            </Col>
                            <Col span={11}>
                                <ProjectCard
                                    title="Система нормоконтроля студенческих работ"
                                    date="8 июня 2020 г."
                                    img={img2}
                                    route="/"
                                    desc="
                                        Количество студентов за последние годы выросло во много раз, из-за этого сотрудники 
                                        кафедры стали тратить много времени на проверку студенческих работ соответствию нормоконтролю. 
                                        Появилась потребность в автоматизации процесса проверки."
                                />
                            </Col>
                        </Row>
                        <div className={styles.linkContainer}>
                            <LocalLink to="/portfolio" className={styles.link}>
                                Все работы <ArrowRightOutlined />
                            </LocalLink>
                        </div>
                    </section>
                </div>
            </FadePage>
        </>
    )
}

export default MainPage
