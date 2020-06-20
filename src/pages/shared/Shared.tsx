import React from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'
import { Layout } from 'antd'

const { Content } = Layout

const Shared: React.FC = (props) => {
    return (
        <Layout style={{ background: "transparent", minHeight: "100vh" }}>
            <Header />
            <Content>
                {props.children}
            </Content>
            <Footer />
        </Layout>

    )
}

export default Shared