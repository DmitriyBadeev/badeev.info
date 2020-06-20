import React from 'react'
import styles from './Footer.module.less'
import Logo from '../../../components/logo/Logo'
import { Layout } from 'antd'

const Footer: React.FC = () => {
    return (
        <Layout.Footer className={styles.footer}>
            <Logo className={styles.logo} />
        </Layout.Footer>
    )
}

export default Footer