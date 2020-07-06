import React, { CSSProperties } from "react"
import styles from "./tags.module.less"
import TagComponent from "./Tag"

type propTypes = {
    tagList: Array<String | undefined | null>
    style?: CSSProperties
}

//!Временно
//TODO Сделать деление тегов на фронт и бэк
const StringTagList: React.FC<propTypes> = (props) => {
    if (!props.tagList) return <div className={styles.tagList}></div>

    return (
        <div className={styles.tagList} style={props.style}>
            {props.tagList.map((tag, i) => {
                return <TagComponent key={i}>{tag}</TagComponent>
            })}
        </div>
    )
}

export default StringTagList
