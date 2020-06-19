import React from 'react'
import styles from './tags.module.less'

const Tag : React.FC = (props) => {
    return (
        <div className={styles.tag}>{props.children}</div>
    )
}

export default Tag