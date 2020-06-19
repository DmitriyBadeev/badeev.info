import React from 'react'
import { Typography, Button, Row, Col, Input, Space } from "antd";
import styles from './Navbar.module.less'
import LocalLink from '../../../components/links/LocalLink'
import CSSTransition from 'react-transition-group/CSSTransition'
import { LockOutlined } from '@ant-design/icons';

const { Title } = Typography

const titleStyles = {
    color: '#fff',
    borderBottom: 'solid 2px #fff',
    paddingBottom: '20px'
}

type propTypes = {
    isOpen: boolean
    onClose: (event: React.MouseEvent) => void
}

const enterHandler = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(e.target)
}

const Navbar: React.FC<propTypes> = (props) => {

    return (
        <CSSTransition
            in={props.isOpen}
            timeout={300}
            classNames="modalNavbar"
            unmountOnExit={true}
            mountOnEnter={true}
        >
            <div className={styles.background}>
                <div className={styles.cross} onClick={props.onClose}>×</div>

                <Row style={{ width: "100vw", marginTop: "60px" }} justify="space-around">
                    <Col span={8}>
                        <Title level={1} style={titleStyles}>Тайный бункер</Title>
                        <form onSubmit={enterHandler}>
                            <Space direction="vertical" size="large" className="mt-30 w-100">
                                <Input.Password name="password" prefix={<LockOutlined style={{ color: "#8C8C8C" }} />} placeholder="Секретный ключ" size="large" />
                                <Button htmlType="submit" type="primary" className={styles.button} size="large">Войти</Button>
                            </Space>
                        </form>
                    </Col>
                    <Col span={8}>
                        <Title level={1} style={titleStyles}>Навигация</Title>

                        <div className={styles.wrapper}>
                            <LocalLink to='/' onClick={props.onClose} type='dark'>Главная</LocalLink>
                            <LocalLink to='/portfolio' onClick={props.onClose} type='dark'>Портфолио</LocalLink>
                        </div>
                    </Col>
                </Row>
            </div>
        </CSSTransition>
    )
}

export default Navbar