import React from 'react'
import ProjectCard from '../../components/cards/ProjectCard'
import FadePage from '../../components/fade/FadePage'
import styles from './PortfolioPage.module.less'
import { Row, Col } from 'antd'
import { getStringDate } from '../../helpers/dateHelpers'

import img1 from '../../assets/min.png'
import img2 from '../../assets/min2.png'

import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'

const works = gql`
    {
        works {
            nodes {
                id
                title
                shortDescription
                date
                imgPath
            }
        }    
    }
`;

interface Work {
    id: number;
    title: string;
    shortDescription: string;
    imgPath: string
    date: string
}

interface Works {
    works: Work[];
}

const PortfolioPage: React.FC = () => {

    const { loading, error, data } = useQuery(works);

    return (
        <FadePage>
            <div className={styles.wrapperPage}>
                <Row justify="space-between" gutter={[0, 50]}>
                    {
                        loading ? <p>Loading...</p> :
                            data.works.nodes.map((work: Work) => {
                                return <Col span={11}>
                                    <ProjectCard
                                        title={work.title}
                                        date={getStringDate(work.date)}
                                        img={work.imgPath}
                                        route="/"
                                        desc={work.shortDescription} />
                                </Col>
                            })
                    }

                </Row>
                <Row justify="space-between" gutter={[0, 50]}>
                    <Col span={11}>
                        <ProjectCard title="Доступный ремонт" date="28 января 2020 г." img={img1} route="/" desc="
                                Красивый и современный сайт для компании, предоставляющей услуги по ремонту жилых
                                помещений и офисов. На сайте можно бесплатно составить смету, а также оплатить услуги онлайн."/>
                    </Col>
                    <Col span={11}>
                        <ProjectCard title="Система нормоконтроля студенческих работ" date="8 июня 2020 г." img={img2} route="/" desc="
                                    Количество студентов за последние годы выросло во много раз, из-за этого сотрудники 
                                    кафедры стали тратить много времени на проверку студенческих работ соответствию нормоконтролю. 
                                    Появилась потребность в автоматизации процесса проверки."/>
                    </Col>
                </Row>
            </div>
        </FadePage>
    )
}

export default PortfolioPage