import React from 'react'
import { Typography } from 'antd'
import styles from './cards.module.less'

const { Title, Paragraph } = Typography

type propTypes = {
    title : string,
    desc : string,
    date : string
}

const CardDescription : React.FC<propTypes> = (props) => {
    return (
        <div className={styles.desc}>
            <Paragraph style={{margin: "0"}} type="secondary">{props.date}</Paragraph>
            <Title style={{marginTop: "10px"}} level={3}><span className="underline">{props.title}</span></Title>
            <Paragraph>{props.desc}</Paragraph>
        </div>
    )
}

export default CardDescription