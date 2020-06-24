import React from "react"
import styles from "./Avatar.module.less"
import vk from "../../assets/vk.svg"
import github from "../../assets/github.svg"
import telegram from "../../assets/telegram.svg"

type propTypes = {
    ClassName?: string
    SizeInPixel?: number
}

const Contacts: React.FC<propTypes> = ({ ClassName, SizeInPixel = 30 }) => {
    return (
        <div className={ClassName}>
            <a href="https://vk.com/d_503_45" rel="noopener noreferrer" target="_blank">
                <img
                    src={vk}
                    alt="Вконтакте"
                    className={styles.iconLink}
                    style={{
                        width: `${SizeInPixel}px`,
                        height: `${SizeInPixel}px`,
                        marginLeft: `${SizeInPixel / 3}px`,
                    }}
                />
            </a>
            <a href="https://github.com/DmitriyBadeev" rel="noopener noreferrer" target="_blank">
                <img
                    src={github}
                    alt="GitHub"
                    className={styles.iconLink}
                    style={{
                        width: `${SizeInPixel}px`,
                        height: `${SizeInPixel}px`,
                        marginLeft: `${SizeInPixel / 3}px`,
                    }}
                />
            </a>
            <a href="https://t.me/DmitriyBadeev" rel="noopener noreferrer" target="_blank">
                <img
                    src={telegram}
                    alt="Telegram"
                    className={styles.iconLink}
                    style={{
                        width: `${SizeInPixel}px`,
                        height: `${SizeInPixel}px`,
                        marginLeft: `${SizeInPixel / 3}px`,
                    }}
                />
            </a>
        </div>
    )
}

export default Contacts
