import React from 'react'

import styles from './Footer.module.less'
import Logo from '../../../components/logo/Logo'

const Footer : React.FC = () => {
    return (
        <div className={styles.footer}>
            <Logo className={styles.logo}/>
           
        </div>
    )
}

export default Footer