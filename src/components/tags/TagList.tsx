import React, { CSSProperties } from "react"
import styles from "./tags.module.less"
import TagComponent from "./Tag"
import { Tag } from "../../types"

type propTypes = {
    tagList: Array<Tag | undefined | null>
    style?: CSSProperties
}

const TagList: React.FC<propTypes> = (props) => {
    if (!props.tagList) return <div className={styles.tagList}></div>

    return (
        <div className={styles.tagList} style={props.style}>
            {props.tagList.map((tag, i) => {
                return <TagComponent key={i}>{tag?.title}</TagComponent>
            })}
        </div>
    )
}

export default TagList
