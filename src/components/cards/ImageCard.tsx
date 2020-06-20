import React, { useState, useRef } from "react"
import { Transition } from "react-transition-group"
import styles from "./cards.module.less"
import { Maybe } from "../../types"

type propTypes = {
    height: number
    img: any //TODO типизировать как-нибудь
    alt?: Maybe<string>
}

const ImageCard: React.FC<propTypes> = (props) => {
    const [isMouseEnter, setIsMouseEnter] = useState(false)
    const imgEl = useRef(null as any)
    const imgCard = useRef(null as any)

    const transitionStyles = () => {
        if (imgEl.current !== null) {
            const height = imgEl.current.height
            const heightContainer = imgCard.current.clientHeight

            return {
                entering: { top: `-${height - heightContainer}px` },
                entered: { top: "0" },
                exiting: {},
                exited: {},
                unmounted: {},
            }
        }

        return {
            entering: {},
            entered: {},
            exiting: {},
            exited: {},
            unmounted: {},
        }
    }

    return (
        <div ref={imgCard} className={styles.imageCard} style={{ paddingTop: `${props.height}%` }}>
            <Transition
                in={isMouseEnter}
                exit={false}
                timeout={{
                    enter: 3000,
                }}
            >
                {(state) => (
                    <img
                        src={props.img}
                        ref={imgEl}
                        onMouseOver={() => setIsMouseEnter(!isMouseEnter)}
                        onMouseOut={() => setIsMouseEnter(!isMouseEnter)}
                        style={{ ...transitionStyles()[state] }}
                        className={styles.image}
                        alt={props.alt || "Изображение в карточке"}
                    />
                )}
            </Transition>
        </div>
    )
}

export default ImageCard
