import React from 'react'
import styles from './Avatar.module.less'
import { Typography, Descriptions } from 'antd'
import img from '../../assets/avatar.png'  
import { getAge } from '../../helpers/dateHelpers'
import GlobalLink from '../../components/links/GlobalLink'
import vk from '../../assets/vk.svg'
import github from '../../assets/github.svg'

const { Paragraph, Title } = Typography

type typeProps = {
    withDesc: boolean
}

const Avatar : React.FC<typeProps> = (withDesc) => {
    return (
        <>
            <div className={styles.avatarWrapper}>
                <img src={img} alt="Аватар" className={styles.avatar}/>
            </div>
            {withDesc && <AvatarDesc />}
        </>
    )
}

const AvatarDesc : React.FC = () => {
    return (
        <div className={styles.avatarDesc}>
            <Paragraph type="secondary" className={styles.info}>
                <span>{ getAge() }&thinsp;лет</span> <span>Веб-разработчик</span><span>Екатеринбург</span>
            </Paragraph>
            <Title className={styles.name} level={3}>Дмитрий Бадеев</Title>

            <Descriptions column={1} className="mt-30">
                <Descriptions.Item label="Почта">
                    <GlobalLink to="mailto:mail@badeev.info">mail@badeev.info</GlobalLink>
                </Descriptions.Item>
                <Descriptions.Item label="Телефон">
                    <GlobalLink to="tel:+79195967515">+7&thinsp;919&thinsp;596-75-15</GlobalLink>
                </Descriptions.Item>
                <Descriptions.Item label="Другое">
                    <a href="https://vk.com/d_503_45" rel="noopener noreferrer" target="_blank"><img src={vk} alt="Вконтакте" className={styles.iconLink}/></a>
                    <a href="https://github.com/DmitriyBadeev" rel="noopener noreferrer" target="_blank"><img src={github} alt="GitHub" className={styles.iconLink}/></a>
                </Descriptions.Item>
            </Descriptions>
        </div>
    )
}

export default Avatar