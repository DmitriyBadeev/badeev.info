import React from 'react'
import Card from './Card'
import CardDescription from './CardDescription'
import ImageCard from './ImageCard'
import { Link } from 'react-router-dom'

import styles from './cards.module.less'

type propTypes = {
    img : any,  //TODO как-то типизировать
    title : string,
    date : string,
    desc : string,
    route : string
}

const ProjectCard : React.FC<propTypes> = (props) => {
    return (
        <Link to={props.route} className={styles.link}>
            <Card>
                <ImageCard height={65} img={props.img} alt={props.title}/>
            </Card>
            <CardDescription date={props.date} title={props.title} desc={props.desc}/>
        </Link>
        
    )
}

export default ProjectCard