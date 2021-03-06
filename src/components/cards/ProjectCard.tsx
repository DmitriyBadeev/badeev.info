import React from "react"
import Card from "./Card"
import CardDescription from "./CardDescription"
import ImageCard from "./ImageCard"
import { Link } from "react-router-dom"
import { Maybe } from "../../types"

import styles from "./cards.module.less"

type propTypes = {
    img: string
    title?: Maybe<string>
    date: string
    desc?: Maybe<string>
    id?: Maybe<number>
}

const ProjectCard: React.FC<propTypes> = (props) => {
    return (
        <Link to={`/portfolio/${props.id}`} className={styles.link}>
            <Card>
                <ImageCard height={65} img={props.img} alt={props.title} />
            </Card>
            <CardDescription date={props.date} title={props.title} desc={props.desc} />
        </Link>
    )
}

export default ProjectCard
