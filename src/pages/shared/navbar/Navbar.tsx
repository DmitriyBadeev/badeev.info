import React from "react"
import { Typography, Button, Row, Col, Input, Space } from "antd"
import styles from "./Navbar.module.less"
import LocalLink from "../../../components/links/LocalLink"
import CSSTransition from "react-transition-group/CSSTransition"
import { LockOutlined } from "@ant-design/icons"
import useStore from "../../../store/useStore"
import { observer } from "mobx-react"

const { Title } = Typography

const titleStyles = {
    color: "#fff",
    borderBottom: "solid 2px #fff",
    paddingBottom: "20px",
}

type propTypes = {
    isOpen: boolean
    onClose: (event: React.MouseEvent) => void
}

const enterHandler = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(e.target)
}

const Navbar: React.FC<propTypes> = observer((props) => {
    const { navStore } = useStore()

    return (
        <CSSTransition
            in={props.isOpen}
            timeout={300}
            classNames="modalNavbar"
            unmountOnExit={true}
            mountOnEnter={true}
        >
            <div className={styles.background}>
                <div className={styles.cross} onClick={props.onClose}>
                    ×
                </div>

                <Row style={{ width: "100vw", marginTop: "60px" }} justify="space-around" gutter={[0, 40]}>
                    <Col
                        lg={{ span: 8, order: 1 }}
                        md={{ span: 16, order: 2 }}
                        sm={{ span: 20, order: 2 }}
                        xs={{ span: 24, order: 2 }}
                    >
                        <Title level={1} style={titleStyles}>
                            Тайный бункер
                        </Title>
                        <form onSubmit={enterHandler}>
                            <Space direction="vertical" size="large" className="mt-30 w-100">
                                <Input.Password
                                    name="password"
                                    prefix={<LockOutlined style={{ color: "#8C8C8C" }} />}
                                    placeholder="Секретный ключ"
                                    size="large"
                                />
                                <Button htmlType="submit" type="primary" className={styles.button} size="large">
                                    Войти
                                </Button>
                            </Space>
                        </form>
                    </Col>
                    <Col
                        lg={{ span: 10, order: 2 }}
                        md={{ span: 16, order: 1 }}
                        sm={{ span: 20, order: 1 }}
                        xs={{ span: 24, order: 1 }}
                    >
                        <Title level={1} style={titleStyles}>
                            Навигация
                        </Title>

                        <div className={styles.wrapper}>
                            <LocalLink to="/" onClick={props.onClose} type="dark">
                                Главная
                            </LocalLink>
                            <LocalLink to="/portfolio" onClick={props.onClose} type="dark">
                                Портфолио
                            </LocalLink>
                            {navStore.isWorkPage && (
                                <LocalLink to={navStore.link} onClick={props.onClose} type="dark">
                                    {navStore.workTitle}
                                </LocalLink>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        </CSSTransition>
    )
})

export default Navbar
