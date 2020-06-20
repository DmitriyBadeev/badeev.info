import React, { useEffect, useState } from "react"
import { CSSTransition } from "react-transition-group"

import styles from "./FadePage.module.less"

const FadePage: React.FC = (props) => {
    const [inProp, setInProp] = useState(false)

    useEffect(() => {
        setInProp(true)
    }, [])

    return (
        <CSSTransition classNames="page-fade" in={inProp} timeout={{ enter: 500, exit: 0 }}>
            <div className={styles.wrapper}>{props.children}</div>
        </CSSTransition>
    )
}

export default FadePage
