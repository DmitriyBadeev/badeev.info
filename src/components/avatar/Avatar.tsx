import React from "react"
import styles from "./Avatar.module.less"
import { Typography, Descriptions } from "antd"
import { getAge } from "../../helpers/dateHelpers"
import GlobalLink from "../../components/links/GlobalLink"
import Contacts from "./Contacts"

const { Paragraph, Title } = Typography

type typeProps = {
    withDesc: boolean
}

const Avatar: React.FC<typeProps> = (withDesc) => {
    return (
        <>
            <div className={styles.avatarWrapper}>
                <img src="https://storage.badeev.info/avatar.png" alt="Аватар" className={styles.avatar} />
            </div>
            {withDesc && <AvatarDesc />}
        </>
    )
}

const AvatarDesc: React.FC = () => {
    return (
        <div className={styles.avatarDesc}>
            <Paragraph type="secondary" className={styles.info}>
                <span>{getAge()}&thinsp;лет</span> <span>Веб-разработчик</span>
                <span>Екатеринбург</span>
            </Paragraph>
            <Title className={styles.name} level={3}>
                Дмитрий Бадеев
            </Title>

            <Descriptions column={1} className="mt-30">
                <Descriptions.Item label="Почта">
                    <GlobalLink to="mailto:mail@badeev.info">mail@badeev.info</GlobalLink>
                </Descriptions.Item>
                <Descriptions.Item label="Телефон">
                    <GlobalLink to="tel:+79195967515">+7&thinsp;919&thinsp;596-75-15</GlobalLink>
                </Descriptions.Item>
                <Descriptions.Item label="Другое">
                    <Contacts />
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default Avatar
